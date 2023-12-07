<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Symfony\Component\Process\Exception\ProcessFailedException;
use symfony\Component\Process\Process;

class UsuarioController extends Controller
{
    use LivewireAlert;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = User::all();
        return view('usuarios.index', compact('usuarios'));
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
        $usuarios = request()->except('_token');
        $usuarios['password'] = Hash::make($usuarios['password']); // Encriptar la contraseña
        User::insert($usuarios);
        $this->flash('success', 'Creado correctamente');
        return redirect(route('usuarios.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(User $usuario)
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
        $usuarios = request()->except(['_token', '_method']);
        User::where('id', '=', $id)->update($usuarios);
        $this->flash('success', 'Modificado correctamente');
        return redirect(route('usuarios.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        /* User::destroy($id);
        $this->flash('warning', 'Eliminado correctamente');
        return redirect(route('usuarios.index')); */
    }
}
