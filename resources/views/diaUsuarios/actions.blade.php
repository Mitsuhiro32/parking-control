<div class="btn-group">
    <div class="me-2">
        <!-- Botón editar -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#editarDiaUsuarioModal{{ $row->id }}">
            Editar
        </button>

        <!-- Modal para editar -->
        <div class="modal fade" id="editarDiaUsuarioModal{{ $row->id }}" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="editarDiaUsuarioModalLabel{{ $row->id }}"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editarDiaUsuarioModalLabel{{ $row->id }}">
                            Editar Estacionamiento
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form action="{{ route('diaUsuarios.update', $row) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="usuario_id">Usuario</label>
                                <br><br>
                                <select name="usuario_id" id="usuario_id" class="form-control" required>
                                    <option value="">Seleccione un usuario</option>
                                    @foreach ($usuarios as $u)
                                        <option value="{{ $u->id }}"
                                            {{ $row->usuario_id == $u->id ? 'selected' : '' }}>
                                            {{ $u->name }}</option>
                                    @endforeach
                                </select>
                                <br>
                                <label for="dia_habilitado_id">Día</label>
                                <br><br>
                                <select name="dia_habilitado_id" id="dia_habilitado_id" class="form-control" required>
                                    <option value="">Seleccione un día</option>
                                    @foreach ($dias as $d)
                                        <option value="{{ $d->id }}"
                                            {{ $row->dia_habilitado_id == $d->id ? 'selected' : '' }}>
                                            {{ $d->nombre }}</option>
                                    @endforeach
                                </select>
                                <br>
                                <label for="facultad">Facultad</label>
                                <br><br>
                                <select name="facultad" id="facultad" class="form-control" required>
                                    <option value="">Seleccione una facultad</option>
                                    <option value="FACEM" {{ $row->facultad == 'FACEM' ? 'selected' : '' }}>
                                        FACEM</option>
                                    <option value="FACAT" {{ $row->facultad == 'FACAT' ? 'selected' : '' }}>
                                        FACAT</option>
                                    <option value="FCJHS" {{ $row->facultad == 'FCJHS' ? 'selected' : '' }}>
                                        FCJHS</option>
                                    <option value="FACSA" {{ $row->facultad == 'FACSA' ? 'selected' : '' }}>
                                        FACSA</option>
                                    <option value="FACVA" {{ $row->facultad == 'FACVA' ? 'selected' : '' }}>
                                        FACVA</option>
                                    <option value="ISEDE" {{ $row->facultad == 'ISEDE' ? 'selected' : '' }}>
                                        ISEDE</option>
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
    </div>
    <div class="me-2">
        <form action="{{ route('diaUsuarios.destroy', $row->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Eliminar</button>
        </form>
    </div>
</div>
