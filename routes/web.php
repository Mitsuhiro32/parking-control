<?php

use App\Http\Controllers\DiaUsuarioController;
use App\Http\Controllers\EstacionamientoController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

Route::get('/', function () {
    return view('home');
})->middleware(['auth','verified'])->name('home');

Route::resource('estacionamientos', EstacionamientoController::class)->middleware(['auth','verified']);
Route::resource('diaUsuarios', DiaUsuarioController::class)->middleware(['auth','verified']);
Route::resource('usuarios', UsuarioController::class)->middleware(['auth','verified']);
Route::resource('registros', RegistroController::class)->middleware(['auth','verified']);

/*Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home'); */

