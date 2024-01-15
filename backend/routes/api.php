<?php

use App\Http\Controllers\AutController;
use App\Http\Controllers\BitacorasController;
use App\Http\Controllers\EnlacesController;
use App\Http\Controllers\PaginasController;
use App\Http\Controllers\PersonasController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UsuariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::controller(UserController::class)->group(function(){
    Route::get('/usuario','index');
    
});

Route::controller(AutController::class)->group(function(){
    Route::post('/registro','register');
    Route::post('/login','login');
});
Route::controller(BitacorasController::class)->group(function(){
    Route::get('/bitacoras','index');
    Route::post('/bitacoras','store');
    Route::put('/bitacoras/{id}','update');
    Route::delete('/bitacoras/{id}','destroy');
});
Route::controller(EnlacesController::class)->group(function(){
    Route::get('/enlaces','index');
    Route::post('/enlces','store');
    Route::put('/enlaces/{id}','update');
    Route::delete('/enlaces/{id}','destroy');
});
Route::controller(PaginasController::class)->group(function(){
    Route::get('/paginas','index');
    Route::post('/paginas','store');
    Route::put('/paginas/{id}','update');
    Route::delete('/paginas/{id}','destroy');
});
Route::controller(PersonasController::class)->group(function(){
    Route::get('/personas','index');
    Route::post('/personas','store');
    Route::put('/personas/{id}','update');
    Route::delete('/personas/{id}','destroy');
});
Route::controller(RolesController::class)->group(function(){
    Route::get('/roles','index');
    Route::post('/roles','store');
    Route::put('/roles/{id}','update');
    Route::delete('/roles/{id}','destroy');
});
Route::controller(UsuariosController::class)->group(function(){
    Route::get('/usuarios','index');
    Route::post('/usuarios','store');
    Route::put('/usuarios/{id}','update');
    Route::delete('/usuarios/{id}','destroy');
});
