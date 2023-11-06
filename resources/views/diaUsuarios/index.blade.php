@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <br>
                <h1>Días Hábiles de Usuarios</h1>
            </div>
        </div>

        <!-- Botón nuevo -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoDiaUsuarioModal">
            Nuevo
        </button>

        <!-- Modal para crear nuevo estacionamiento -->
        <div class="modal fade" id="nuevoDiaUsuarioModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="nuevoDiaUsuarioModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="nuevoDiaUsuarioModalLabel">Nuevo Dia hábil de Usuario</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form action="{{ route('diaUsuarios.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="usuario_id">Usuario</label>
                                <br><br>
                                <select name="usuario_id" id="usuario_id" class="form-control" required>
                                    <option value="">Seleccione un usuario</option>
                                    @foreach ($usuarios as $usuario)
                                        <option value="{{ $usuario->id }}">{{ $usuario->name }}</option>
                                    @endforeach
                                </select>
                                <br>
                                <label for="dia_id">Día</label>
                                <br><br>
                                <select name="dia_habilitado_id" id="dia_habilitado_id" class="form-control" required>
                                    <option value="">Seleccione un día</option>
                                    @foreach ($dias as $dia)
                                        <option value="{{ $dia->dia_id }}">{{ $dia->dia_nombre }}</option>
                                    @endforeach
                                </select>
                                <br>
                                <label for="dia_user_facultad">Facultad</label>
                                <br><br>
                                <select name="dia_user_facultad" id="dia_user_facultad" class="form-control" required>
                                    <option value="">Seleccione una facultad</option>
                                    <option value="FACEM">FACEM</option>
                                    <option value="FACAT">FACAT</option>
                                    <option value="FCJHS">FCJHS</option>
                                    <option value="FACSA">FACSA</option>
                                    <option value="FACVA">FACVA</option>
                                    <option value="ISEDE">ISEDE</option>
                                </select>
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
                            <th>Usuario</th>
                            <th>Día</th>
                            <th>Facultad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($diaUsuarios as $diaUsuario)
                            <tr>
                                <td>{{ $diaUsuario->usuario->name }}</td>
                                <td>{{ $diaUsuario->dia->dia_nombre }}</td>
                                <td>{{ $diaUsuario->dia_user_facultad }}</td>
                                <td>
                                    <div class="btn-group">
                                        <div class="me-2">
                                            <a href="{{ route('diaUsuarios.edit', $diaUsuario->dia_user_id) }}"
                                                class="btn btn-warning">Editar</a>
                                        </div>
                                        <div class="me-2">
                                            <form action="{{ route('diaUsuarios.destroy', $diaUsuario->dia_user_id) }}"
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
