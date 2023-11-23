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
                                <label for="name">Nombre</label>
                                <br><br>
                                <input type="text" class="form-control" name="nombre" id="nombre"
                                    placeholder="Nombre" required>
                                <br>
                                <label for="apellido">Apellido</label>
                                <br><br>
                                <input type="text" class="form-control" name="apellido" id="apellido"
                                    placeholder="Apellido" required>
                                <br>
                                <label for="ci">Cédula de identidad</label>
                                <br><br>
                                <input type="text" class="form-control" name="ci" id="ci"
                                    placeholder="Cedula" required>
                                <br>
                                <label for="telefono">Teléfono</label>
                                <br><br>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    placeholder="Telefono" required>
                                <br>
                                <label for="email">Correo Electrónico</label>
                                <br><br>
                                <input type="text" class="form-control" name="email" id="email"
                                    placeholder="Correo Electrónico" required>
                                <br>
                                <label for="password">Contraseña</label>
                                <br><br>
                                <input type="password" name="password"
                                    class="form-control @error('password') is-invalid @enderror" placeholder="Contraseña"
                                    autocomplete="off" required>
                                <br>
                                <label for="uid_tarjeta">UID Tarjeta</label>
                                <br><br>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="uid_tarjeta" id="uid_tarjeta"
                                        placeholder="UID Tarjeta" disabled>
                                    <button class="btn btn-primary" type="button" id="asignar-btn">Asignar</button>
                                </div>
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

        <!-- Datatable de usuarios -->
        @livewire('usuario-datatable')
    </div>
@endsection
