<?php

namespace App\Http\Controllers;

use App\Models\Estacionamiento;
use Illuminate\Http\Request;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class EstacionamientoController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:estacionamientos.index')->only('index');
        $this->middleware('permission:estacionamientos.store')->only('store');
        $this->middleware('permission:estacionamientos.update')->only('update');
    }

    use LivewireAlert;

    public function index()
    {
        $estacionamientos = Estacionamiento::all();
        return view('estacionamientos.index', compact('estacionamientos'));
    }

    public function store(Request $request)
    {
        $estacionamientos = request()->except('_token');
        Estacionamiento::insert($estacionamientos);
        $this->flash('success', 'Creado correctamente');
        return redirect(route('estacionamientos.index'));
    }

    public function update(Request $request, $id)
    {
        $estacionamientos = request()->except(['_token', '_method']);
        Estacionamiento::where('id', '=', $id)->update($estacionamientos);
        $this->flash('success', 'Modificado correctamente');
        return redirect(route('estacionamientos.index'));
    }
}
