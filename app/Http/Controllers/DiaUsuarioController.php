<?php

namespace App\Http\Controllers;

use App\Models\Dia;
use App\Models\DiaUsuario;
use App\Models\User;
use Illuminate\Http\Request;

class DiaUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diaUsuarios = DiaUsuario::all();
        $dias = Dia::all();
        $usuarios = User::all();
        return view('diaUsuarios.index', compact('diaUsuarios', 'dias', 'usuarios'));
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
        $diaUsuarios = request()->except('_token');
        DiaUsuario::insert($diaUsuarios);
        // Flash::success('Creado correctamente');
        return redirect(route('diaUsuarios.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(DiaUsuario $diaUsuario)
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
        $diaUsuarios = request()->except(['_token', '_method']);
        DiaUsuario::where('id', '=', $id)->update($diaUsuarios);
        // Flash::success('Modificado correctamente');
        return redirect(route('diaUsuarios.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        /* DiaUsuario::destroy($id);
        // Flash::success('Eliminado correctamente');
        return redirect(route('diaUsuarios.index')); */
    }
}
