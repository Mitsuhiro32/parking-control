<?php

namespace App\Http\Controllers;

use App\Models\Estacionamiento;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $estacionamientos = Estacionamiento::all();
        return view('home', compact('estacionamientos'));
    }
}
