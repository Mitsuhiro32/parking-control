<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Spatie\Permission\Models\Role;

class UsuarioController extends Controller
{
    use LivewireAlert;

    public function __construct()
    {
        $this->middleware('permission:usuarios.index')->only('index');
        $this->middleware('permission:usuarios.store')->only('store');
        $this->middleware('permission:usuarios.update')->only('update');
    }

    public function index()
    {
        $usuarios = User::all();
        $roles = Role::all();
        return view('usuarios.index', compact('usuarios', 'roles'));
    }

    public function store(Request $request)
    {
        $usuario = new User();
        $usuario->fill($request->all());
        $usuario->password = Hash::make($request->password); // Encriptar la contraseña
        $usuario->save();
        $usuario->assignRole($request->rol);
        $this->flash('success', 'Creado correctamente');
        return redirect(route('usuarios.index'));
    }

    public function update(Request $request, $id)
    {
        $usuario = User::findOrFail($id);
        $usuario->fill($request->all());
        $usuario->save();
        $usuario->syncRoles($request->rol);
        $this->flash('success', 'Modificado correctamente');
        return redirect(route('usuarios.index'));
    }
}
