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
        $messages = [
            'usuario_id.required' => 'El campo Usuario es obligatorio.',
            'dia.required' => 'El campo Dia es obligatorio.',
            'facultad.required' => 'El campo Facultad es obligatorio.',
        ];

        $validation = $request->validate([
            'usuario_id' => 'required',
            'dia' => 'required',
            'facultad' => 'required',
        ], $messages);

        $diaUsuario = new DiaUsuario();
        $diaUsuario->fill($validation);
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->save();
        $this->flash('success', 'Creado correctamente');
        return back();
    }

    public function update(Request $request, $id)
    {
        $messages = [
            'usuario_id.required' => 'El campo Usuario es obligatorio.',
            'dia.required' => 'El campo Dia es obligatorio.',
            'facultad.required' => 'El campo Facultad es obligatorio.',
        ];

        $validation = $request->validate([
            'usuario_id' => 'required',
            'dia' => 'required',
            'facultad' => 'required',
        ], $messages);

        $diaUsuario = DiaUsuario::findOrFail($id);
        $diaUsuario->fill($validation);
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->save();
        $this->flash('success', 'Modificado correctamente');
        return back();
    }

    public function destroy($id)
    {
        $diaUsuario = DiaUsuario::findOrFail($id);
        $diaUsuario->autor = auth()->user()->nombre;
        $diaUsuario->delete();
        $this->flash('warning', 'Eliminado correctamente');
        return back();
    }
}
