<?php

use App\Http\Controllers\FileManager\ApiFileController;
use App\Http\Controllers\FileManager\ApiFolderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/folders', [ApiFolderController::class, 'index']);
Route::post('/folders', [ApiFolderController::class, 'store']);
Route::delete('/folders/{folder}', [ApiFolderController::class, 'delete'])->where(['folder' => '.*']);

Route::get('/files', [ApiFileController::class, 'index']);
Route::post('/files', [ApiFileController::class, 'store']);
Route::delete('/files/{file}', [ApiFileController::class, 'delete'])->where(['file' => '.*']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
