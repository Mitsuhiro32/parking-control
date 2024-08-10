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
        $messages = [
            'nombre.required' => 'El campo Nombre es obligatorio.',
            'capacidad.required' => 'El campo Capacidad es obligatorio.',
        ];

        $validation = $request->validate([
            'nombre' => 'required',
            'capacidad' => 'required',
        ], $messages);

        $estacionamiento = new Estacionamiento();
        $estacionamiento->fill($validation);
        $estacionamiento->autor = auth()->user()->nombre;
        $estacionamiento->save();
        $this->flash('success', 'Creado correctamente');
        return back();
    }

    public function update(Request $request, $id)
    {
        $estacionamiento = Estacionamiento::findOrFail($id);

        // Actualizar campo estado
        if ($request->has('estado')) {
            $estacionamiento->estado = $request->estado;
            $estacionamiento->autor = auth()->user()->nombre;
            $estacionamiento->save();
            $this->flash('success', 'Estado modificado correctamente');
        } else {
            $messages = [
                'nombre.required' => 'El campo Nombre es obligatorio.',
                'capacidad.required' => 'El campo Capacidad es obligatorio.',
            ];

            $validation = $request->validate([
                'nombre' => 'required',
                'capacidad' => 'required',
            ], $messages);

            $estacionamiento->fill($validation);
            $estacionamiento->autor = auth()->user()->nombre;
            $estacionamiento->save();
            $this->flash('success', 'Modificado correctamente');
        }
        return back();
    }
}
