@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <br>
                <h1>Estacionamientos</h1>
            </div>
        </div>

        <!-- Botón nuevo -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoEstacionamientoModal">
            Nuevo
        </button>

        <!-- Modal para crear nuevo estacionamiento -->
        <div class="modal fade" id="nuevoEstacionamientoModal" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="nuevoEstacionamientoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="nuevoEstacionamientoModalLabel">Nuevo Estacionamiento</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form action="{{ route('estacionamientos.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="capacidad">Capacidad</label>
                                <br><br>
                                <input type="number" class="form-control" name="est_capacidad" id="est_capacidad"
                                    placeholder="Capacidad" required>
                            </div>
                    </div>

                    <div class="modal-footer d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

        <br><br>

        <div class="row">
            <div class="col">
                <table class="table table-striped table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Capacidad</th>
                            <th>Espacio Ocupado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($estacionamientos as $estacionamiento)
                            <tr>
                                <td>{{ $estacionamiento->est_capacidad }}</td>
                                <td>{{ $estacionamiento->est_ocupado }}</td>
                                <td>
                                    <div class="btn-group">
                                        <div class="me-2">
                                            <a href="{{ route('estacionamientos.edit', $estacionamiento->est_id) }}"
                                                class="btn btn-warning">Editar</a>
                                        </div>
                                        <div class="me-2">
                                            <form action="{{ route('estacionamientos.destroy', $estacionamiento->est_id) }}"
                                                method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">Eliminar</button>
                                            </form>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
