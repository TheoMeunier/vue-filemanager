<?php

namespace App\Http\Controllers\FileManager;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

class AbstractFileManagerController extends Controller
{
    /**
     * @return Filesystem
     */
    protected function filesysteme(): Filesystem
    {
        return Storage::disk('public');
    }
}
