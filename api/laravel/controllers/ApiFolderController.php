<?php

namespace App\Http\Controllers\FileManager;

use App\Http\Controllers\FileManager\AbstractFileManagerController;
use App\Http\Requests\FolderCreateRequest;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Symfony\Component\HttpFoundation\Response;

class ApiFolderController extends AbstractFileManagerController
{
    /**
     * @param  string  $folder
     * @return Application|ResponseFactory|\Illuminate\Http\Response
     */
    public function delete(string $folder)
    {
        $this->filesysteme()->deleteDirectory($folder);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @param  Request  $request
     * @return Collection
     */
    public function index(Request $request): Collection
    {
        $parent = (string) $request->query->get('parent', null);

        if (in_array(trim($parent), ['', 'null'])) {
            $parent = null;
        }

        $directories = $this->filesysteme()->directories($parent);

        return collect($directories)->map([$this, 'toArray']);
    }

    /**
     * @param  FolderCreateRequest  $request
     * @return array
     */
    public function store(FolderCreateRequest $request): array
    {
        /** @var array $data */
        $data = $request->validated();
        $path = ($data['parent'] ?? '').'/'.$data['name'];
        $this->filesysteme()->makeDirectory($path);

        return $this->toArray(trim($path, '/'));
    }

    /**
     * @param  string  $folders
     * @return array
     */
    public function toArray(string $folders): array
    {
        $pathinfo = pathinfo($folders);

        return [
            'id'     => $folders,
            'name'   => $pathinfo['filename'],
            'parent' => $pathinfo['dirname'] === '.' ? null : $pathinfo['dirname'],
        ];
    }
}
