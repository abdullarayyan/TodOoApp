<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskyController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('add',[TaskyController::class,'addTask']);
Route::get('list',[TaskyController::class,'list']);
Route::delete('delete/{id}',[TaskyController::class,'delete']);
Route::get('task/{id}',[TaskyController::class,'getTask']);
Route::put('task/{id}',[TaskyController::class,'editTask']);
Route::get('search/{key}',[TaskyController::class,'search']);
