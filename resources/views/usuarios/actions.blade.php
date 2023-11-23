<div class="btn-group">
    <div class="me-2">
        <!-- Botón editar -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#editarUsuariosModal{{ $row->id }}">
            Editar
        </button>
    </div>

    <!-- Modal para editar usuario -->
    <div class="modal fade" id="editarUsuariosModal{{ $row->id }}" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="editarUsuariosModalLabel{{ $row->id }}" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editarUsuariosModalLabel{{ $row->id }}">
                        Editar Usuarios
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form action="{{ route('usuarios.update', $row) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <br><br>
                            <input type="text" class="form-control" name="nombre" id="nombre"
                                placeholder="Nombre" value="{{ $row->nombre }}" required>
                            <br>
                            <label for="apellido">Apellido</label>
                            <br><br>
                            <input type="text" class="form-control" name="apellido" id="apellido"
                                placeholder="Apellido" value="{{ $row->apellido }}" required>
                            <br>
                            <label for="ci">Cédula</label>
                            <br><br>
                            <input type="text" class="form-control" name="ci" id="ci"
                                placeholder="Cedula" value="{{ $row->ci }}" required>
                            <br>
                            <label for="telefono">Teléfono</label>
                            <br><br>
                            <input type="text" class="form-control" name="telefono" id="telefono"
                                placeholder="Telefono" value="{{ $row->telefono }}" required>
                            <br>
                            <label for="email">Correo Electrónico</label>
                            <br><br>
                            <input type="text" class="form-control" name="email" id="email"
                                placeholder="Correo Electrónico" value="{{ $row->email }}" required>
                            <br>
                            <label for="password">Contraseña</label>
                            <br><br>
                            <input type="text" class="form-control" name="password" id="password"
                                placeholder="Contraseña" value="{{ $row->password }}">
                            <br>
                            <label for="uid_tarjeta">UID Tarjeta</label>
                            <br><br>
                            <div class="input-group">
                                <input type="text" class="form-control" name="uid_tarjeta" id="uid_tarjeta"
                                    placeholder="UID Tarjeta" value="{{ $row->uid_tarjeta }}" disabled>
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
    <div class="me-2">
        <form action="{{ route('diaUsuarios.update', $row) }}" method="POST">
            @csrf
            @method('PUT')
            <input type="hidden" name="estado" value="{{ $row->estado ? '0' : '1' }}">
            <input type="hidden" name="uid_tarjeta" value="{{ $row->uid_tarjeta }}">
            <button type="submit" class="btn btn-{{ $row->estado ? 'danger' : 'success' }}">
                {{ $row->estado ? 'Desactivar' : 'Activar' }}
            </button>
        </form>
    </div>
</div>
