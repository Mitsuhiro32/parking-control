@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Estacionamientos</h1>
        </div>

        <!-- Botón nuevo -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoEstacionamientoModal">
            Nuevo
        </button>

        <!-- Modal para crear nuevo estacionamiento -->
        <div class="modal fade" id="nuevoEstacionamientoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="nuevoEstacionamientoModalLabel" aria-hidden="true">
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
                                <label for="nombre">Nombre</label>
                                <br><br>
                                <input type="text" class="form-control" name="nombre" id="nombre"
                                    placeholder="Nombre" required>
                                <br>
                                <label for="capacidad">Capacidad</label>
                                <br><br>
                                <input type="number" class="form-control" name="capacidad" id="capacidad"
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

        <!-- Tabla de estacionamientos -->
        <div class="conteiner">
            @livewire('estacionamiento-datatable')
            {{-- <table class="table table-striped table-bordered table-hover table-responsive"> --}}

                {{-- <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Capacidad</th>
                        <th>Espacio Ocupado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($estacionamientos as $e)
                        <tr>
                            <td>{{ $e->nombre }}</td>
                            <td>{{ $e->capacidad }}</td>
                            <td>{{ $e->ocupado }}</td>
                            <td>
                                <div class="btn-group">
                                    <div class="me-2">
                                        <!-- Botón editar -->
                                        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                            data-bs-target="#editarEstacionamientoModal{{ $e->id }}">
                                            Editar
                                        </button>

                                        <!-- Modal para editar estacionamiento -->
                                        <div class="modal fade" id="editarEstacionamientoModal{{ $e->id }}"
                                            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                            aria-labelledby="editarEstacionamientoModalLabel{{ $e->id }}"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5"
                                                            id="editarEstacionamientoModalLabel{{ $e->id }}">
                                                            Editar Estacionamiento
                                                        </h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>

                                                    <div class="modal-body">
                                                        <form action="{{ route('estacionamientos.update', $e) }}"
                                                            method="POST">
                                                            @csrf
                                                            @method('PUT')
                                                            <div class="form-group">
                                                                <label for="nombre">Nombre</label>
                                                                <br><br>
                                                                <input type="text" class="form-control" name="nombre"
                                                                    id="nombre" placeholder="Nombre"
                                                                    value="{{ $e->nombre }}" required>
                                                                <br>
                                                                <label for="capacidad">Capacidad</label>
                                                                <br><br>
                                                                <input type="number" class="form-control"
                                                                    name="capacidad" id="capacidad"
                                                                    placeholder="Capacidad" value="{{ $e->capacidad }}"
                                                                    required>
                                                            </div>
                                                    </div>

                                                    <div class="modal-footer d-flex justify-content-between">
                                                        <button type="submit" class="btn btn-primary">Guardar</button>
                                                        <button type="button" class="btn btn-danger"
                                                            data-bs-dismiss="modal">Cancelar</button>
                                                    </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="me-2">
                                        <form action="{{ route('estacionamientos.destroy', $e->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Eliminar</button>
                                        </form>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody> --}}
            {{-- </table> --}}
        </div>
    </div>
@endsection
