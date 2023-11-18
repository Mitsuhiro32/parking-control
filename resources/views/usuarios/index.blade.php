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
                                <input type="text" class="form-control" name="name" id="name"
                                    placeholder="Nombre" required>
                                <br>
                                <label for="apellido">Apellido</label>
                                <br><br>
                                <input type="text" class="form-control" name="apellido" id="apellido"
                                    placeholder="Apellido" required>
                                <br>
                                <label for="ci">Cédula</label>
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
                                <input type="text" class="form-control" name="password" id="password"
                                    placeholder="Contraseña" required>
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

        <div class="col">
            @livewire('usuario-datatable')
            {{--<table class="table table-striped table-bordered table-hover table-responsive">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cédula</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Contraseña</th>
                        <th>UID Tarjeta</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                </tbody>
                @foreach ($usuarios as $u)
                    <tr>
                        <td>{{ $u->name }}</td>
                        <td>{{ $u->apellido }}</td>
                        <td>{{ $u->ci }}</td>
                        <td>{{ $u->telefono }}</td>
                        <td>{{ $u->email }}</td>
                        <td><a href="{{ route('password.request') }}">Olvidé mi contraseña</a></td>
                        <td>{{ $u->uid_tarjeta }}</td>
                        <td>
                            @if ($u->estado == 1)
                                <span class="badge rounded-pill text-bg-success">Activo</span>
                            @else
                                <span class="badge rounded-pill text-bg-danger">Inactivo</span>
                            @endif
                        </td>
                        <td>
                            <div class="btn-group">
                                <div class="me-2">
                                    <!-- Botón editar -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#editarUsuariosModal{{ $u->id }}">
                                        Editar
                                    </button>
                                </div>

                                <!-- Modal para editar usuario -->
                                <div class="modal fade" id="editarUsuariosModal{{ $u->id }}"
                                    data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                    aria-labelledby="editarUsuariosModalLabel{{ $u->id }}" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5"
                                                    id="editarUsuariosModalLabel{{ $u->id }}">
                                                    Editar Usuarios
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>

                                            <div class="modal-body">
                                                <form action="{{ route('usuarios.update', $u) }}" method="POST">
                                                    @csrf
                                                    @method('PUT')
                                                    <div class="form-group">
                                                        <label for="name">Nombre</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="name"
                                                            id="name" placeholder="Nombre"
                                                            value="{{ $u->name }}" required>
                                                        <br>
                                                        <label for="apellido">Apellido</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="apellido"
                                                            id="apellido" placeholder="Apellido"
                                                            value="{{ $u->apellido }}" required>
                                                        <br>
                                                        <label for="ci">Cédula</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="ci"
                                                            id="ci" placeholder="Cedula"
                                                            value="{{ $u->ci }}" required>
                                                        <br>
                                                        <label for="telefono">Teléfono</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="telefono"
                                                            id="telefono" placeholder="Telefono"
                                                            value="{{ $u->telefono }}" required>
                                                        <br>
                                                        <label for="email">Correo Electrónico</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="email"
                                                            id="email" placeholder="Correo Electrónico"
                                                            value="{{ $u->email }}" required>
                                                        <br>
                                                        <label for="password">Contraseña</label>
                                                        <br><br>
                                                        <input type="text" class="form-control" name="password"
                                                            id="password" placeholder="Contraseña"
                                                            value="{{ $u->password }}" required>
                                                        <br>
                                                        <label for="uid_tarjeta">UID Tarjeta</label>
                                                        <br><br>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" name="uid_tarjeta"
                                                                id="uid_tarjeta" placeholder="UID Tarjeta"
                                                                value="{{ $u->uid_tarjeta }}" disabled>
                                                            <button class="btn btn-primary" type="button"
                                                                id="asignar-btn">Asignar</button>
                                                        </div>
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
                                <div class="me-2">
                                    <form action="{{ route('diaUsuarios.update', $u) }}" method="POST">
                                        @csrf
                                        @method('PUT')
                                        <input type="hidden" name="estado" value="{{ $u->estado ? '0' : '1' }}">
                                        <input type="hidden" name="uid_tarjeta" value="{{ $u->uid_tarjeta }}">
                                        <button type="submit" class="btn btn-{{ $u->estado ? 'danger' : 'success' }}">
                                            {{ $u->estado ? 'Desactivar' : 'Activar' }}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </table>--}}
        </div>
    </div>
@endsection
