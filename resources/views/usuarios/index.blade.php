@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Usuarios</h1>
        </div>

        <!-- Botón nuevo -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoUsuarioModal">
            Nuevo
        </button>

        <!-- Modal para crear nuevo usuario -->
        <div class="modal fade" id="nuevoUsuarioModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="nuevoUsuarioModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="nuevoUsuarioModalLabel">Nuevo Usuario</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form action="{{ route('usuarios.store') }}" method="POST">
                            @csrf
                            <div class="form-group">

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

        <div class="col">
            <table class="table table-striped table-bordered table-hover table-responsive">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cedula</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Contraseña</th>
                        <th>UID Tarjeta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection
