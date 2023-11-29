<?php

namespace App\Http\Controllers;

require_once __DIR__ . '/public/phpSerial/PhpSerial.php';

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use PhpSerial;

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

    public function serialRead(Request $request)
    {
        $serial = new PhpSerial();

        // Indicamos el dispositivo que vamos a usar para comunicaciones
        $serial->deviceSet("COM5");

        // Configuramos el puerto serie con los mismos parámetros que Arduino
        $serial->confBaudRate(9600);
        $serial->confParity("none");
        $serial->confCharacterLength(8);
        $serial->confStopBits(1);
        $serial->confFlowControl("none");

        // Abrimos el puerto serie
        $serial->deviceOpen();

        // Enviamos el carácter a
        $serial->sendMessage('a');

        // Leemos el string que nos devuelve Arduino
        $uid = $serial->readPort();

        // Cerramos el puerto serie
        $serial->deviceClose();

        // Mostramos el string
        return response()->json(['uid' => $uid]);
    }
}
