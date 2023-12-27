<?php

namespace App\Http\Controllers;

class AuditoriaController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:auditoria')->only('index');
    }

    public function index()
    {
        return view('auditorias.index');
    }
}
