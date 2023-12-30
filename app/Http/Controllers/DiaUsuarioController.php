<?php

namespace App\Http\Controllers;

use App\Models\DiaUsuario;
use App\Models\User;
use Illuminate\Http\Request;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class DiaUsuarioController extends Controller
{
    use LivewireAlert;

    public function __construct()
    {
        $this->middleware('permission:diaUsuarios.index')->only('index');
        $this->middleware('permission:diaUsuarios.store')->only('store');
        $this->middleware('permission:diaUsuarios.update')->only('update');
        $this->middleware('permission:diaUsuarios.delete')->only('destroy');
    }

    public function index()
    {
        $diaUsuarios = DiaUsuario::all();
        $usuarios = User::all();
        return view('diaUsuarios.index', compact('diaUsuarios', 'usuarios'));
    }

    public function store(Request $request)
    {
        $diaUsuario = new DiaUsuario();
        $diaUsuario->fill($request->all());
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->save();
        $this->flash('success', 'Creado correctamente');
        return redirect(route('diaUsuarios.index'));
    }

    public function update(Request $request, $id)
    {
        $diaUsuario = DiaUsuario::findOrFail($id);
        $diaUsuario->fill($request->all());
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->save();
        $this->flash('success', 'Modificado correctamente');
        return redirect(route('diaUsuarios.index'));
    }

    public function destroy($id)
    {
        $diaUsuario = DiaUsuario::findOrFail($id);
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->delete();
        $this->flash('warning', 'Eliminado correctamente');
        return redirect(route('diaUsuarios.index'));
    }
}
