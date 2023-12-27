<?php

namespace App\Http\Controllers;

use App\Models\Registro;

class RegistroController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:registros.index')->only('index');
    }

    public function index()
    {
        return view('registros.index');
    }
}
