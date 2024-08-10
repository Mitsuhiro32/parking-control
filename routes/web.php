<?php

use App\Http\Controllers\AuditoriaController;
use App\Http\Controllers\DiaUsuarioController;
use App\Http\Controllers\EstacionamientoController;
use App\Http\Controllers\HomeController;
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
Auth::routes(['reset' => true]);

Route::get('/register', function () {
    return redirect('/');
});

Route::resource('/', HomeController::class)->only('index')->middleware(['can:home','auth','verified']);

Route::resource('estacionamientos', EstacionamientoController::class)->only('index','store','update')->middleware(['can:estacionamientos.index','can:estacionamientos.store','can:estacionamientos.update','auth','verified']);
Route::resource('diaUsuarios', DiaUsuarioController::class)->only('index','store','update','destroy')->middleware(['can:diaUsuarios.index','can:diaUsuarios.store','can:diaUsuarios.update','can:diaUsuarios.delete','auth','verified']);
Route::resource('usuarios', UsuarioController::class)->only('index','store','update')->middleware(['can:usuarios.index','can:usuarios.store','can:usuarios.update','auth','verified']);
Route::resource('registros', RegistroController::class)->only('index')->middleware(['can:registros.index', 'can:registros.view','auth','verified']);

// Auditoria
Route::resource('auditorias', AuditoriaController::class)->only('index')->middleware(['can:auditoria','auth','verified']);
