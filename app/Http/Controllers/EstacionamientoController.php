<?php

namespace App\Http\Controllers;

use App\Models\Estacionamiento;
use Illuminate\Http\Request;

class EstacionamientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $estacionamientos = Estacionamiento::all();
        return view('estacionamientos.index', compact('estacionamientos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $estacionamientos = request()->except('_token');
        Estacionamiento::insert($estacionamientos);
        // Flash::success('Creado correctamente');
        return redirect(route('estacionamientos.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Estacionamiento $estacionamiento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $estacionamientos = request()->except(['_token', '_method']);
        Estacionamiento::where('id', '=', $id)->update($estacionamientos);
        // Flash::success('Modificado correctamente');
        return redirect(route('estacionamientos.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Estacionamiento::destroy($id);
        // Flash::Danger('Eliminado correctamente');
        return redirect(route('estacionamientos.index'));
    }
}
