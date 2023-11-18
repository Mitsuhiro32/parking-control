@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Registros</h1>
        </div>

        <div class="col">
            <table class="table table-striped table-bordered table-hover table-responsive">
                <thead class="thead-dark">
                    <tr>
                        <th>Usuario</th>
                        <th>Estacionamiento</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($registros as $r)
                        <tr>
                            <td>{{ $r->usuario->name }}</td>
                            <td>{{ $r->estacionamiento->nombre }}</td>
                            <td>{{ $r->fechaHora_entrada }}</td>
                            <td>{{ $r->fechaHora_salida }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
@endsection
