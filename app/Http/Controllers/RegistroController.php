<?php

namespace App\Http\Controllers;

use App\Models\Estacionamiento;
use App\Models\Registro;
use App\Models\User;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $registros = Registro::all();
        return view('registros.index', compact('registros'));
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
        $registros = request()->except('_token');
        Registro::insert($registros);
        // Flash::success('Creado correctamente');
        return redirect(route('registros.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Registro $registro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Registro $registro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $registros = request()->except(['_token', '_method']);
        Registro::where('id', '=', $id)->update($registros);
        // Flash::success('Actualizado correctamente');
        return redirect(route('registros.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Registro $registro)
    {
        //
    }
}
