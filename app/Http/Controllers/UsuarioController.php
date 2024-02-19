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
        $messages = [
            'nombre.required' => 'El campo Nombre es obligatorio.',
            'apellido.required' => 'El campo Apellido es obligatorio.',
            'ci.required' => 'El campo Cédula es obligatorio.',
            'ci.unique' => 'La Cédula ya existe.',
            'telefono.required' => 'El campo Teléfono es obligatorio.',
            'email.required' => 'El campo Email es obligatorio.',
            'email.email' => 'El campo Email debe ser un email válido.',
            'email.unique' => 'El Email ya existe.',
            'password.required' => 'El campo Contraseña es obligatorio.',
            'password.confirmed' => 'El campo Contraseña no coincide.',
            'password.min' => 'El campo Contraseña debe tener al menos 8 caracteres.',
            'password.regex' => 'El campo Contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número.',
            'password_confirmation.required' => 'El necesario confirmar la contraseña.',
            'rol.required' => 'El campo Rol es obligatorio.',
        ];

        $validation = $request->validate([
            'nombre' => 'required',
            'apellido' => 'required',
            'ci' => 'required|unique:users',
            'telefono' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/',
            'password_confirmation' => 'required',
            'rol' => 'required',
        ], $messages);

        $usuario = new User();
        $usuario->fill($validation);
        $usuario->password = Hash::make($request->password); // Encriptar la contraseña
        $usuario->password_confirmation = Hash::make($request->password_confirmation); // Encriptar confirmar contraseña
        $usuario->uid_tarjeta = $request->uid_tarjeta;
        $usuario->autor = auth()->user()->nombre;
        $usuario->save();
        $usuario->assignRole($request->rol);
        $this->flash('success', 'Creado correctamente');
        return back();
    }

    public function update(Request $request, $id)
    {
        $usuario = User::findOrFail($id);

        // Actualizar campo estado
        if ($request->has('estado')) {
            $usuario->estado = $request->estado;
            $usuario->uid_tarjeta = $request->uid_tarjeta;
            $usuario->autor = auth()->user()->nombre;
            $usuario->save();
            $this->flash('success', 'Estado modificado correctamente');
        }
        else {
            $messages = [
                'nombre.required' => 'El campo Nombre es obligatorio.',
                'apellido.required' => 'El campo Apellido es obligatorio.',
                'ci.required' => 'El campo Cédula es obligatorio.',
                'telefono.required' => 'El campo Teléfono es obligatorio.',
                'email.required' => 'El campo Email es obligatorio.',
                'email.email' => 'El campo Email debe ser un email válido.',
                'rol.required' => 'El campo Rol es obligatorio.',
            ];

            $validation = $request->validate([
                'nombre' => 'required',
                'apellido' => 'required',
                'ci' => 'required',
                'telefono' => 'required',
                'email' => 'required|email',
                'rol' => 'required',
            ], $messages);

            $usuario->fill($validation);
            $usuario->uid_tarjeta = $request->uid_tarjeta;
            $usuario->autor = auth()->user()->nombre;
            $usuario->save();
            $usuario->syncRoles($request->rol);
            $this->flash('success', 'Modificado correctamente');
        }
        return back();
    }
}
