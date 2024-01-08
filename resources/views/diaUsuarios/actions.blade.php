<div class="btn-group">
    @can('diaUsuarios.update')
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
                                    <select name="usuario_id" id="usuario_id" class="form-control" >
                                        <option value="">Seleccione un usuario</option>
                                        @foreach ($usuarios as $u)
                                            <option value="{{ $u->id }}"
                                                {{ $row->usuario_id == $u->id ? 'selected' : '' }}>
                                                {{ $u->nombre }}</option>
                                            </option>
                                        @endforeach
                                    </select>
                                    <br>
                                    <label for="dia">Día</label>
                                    <br><br>
                                    <select name="dia" id="dia" class="form-control" >
                                        <option value="">Seleccione un día</option>
                                        <option value="Lunes" {{ $row->dia == 'Lunes' ? 'selected' : '' }}>
                                            Lunes</option>
                                        <option value="Martes" {{ $row->dia == 'Martes' ? 'selected' : '' }}>
                                            Martes</option>
                                        <option value="Miercoles" {{ $row->dia == 'Miercoles' ? 'selected' : '' }}>
                                            Miércoles</option>
                                        <option value="Jueves" {{ $row->dia == 'Jueves' ? 'selected' : '' }}>
                                            Jueves</option>
                                        <option value="Viernes" {{ $row->dia == 'Viernes' ? 'selected' : '' }}>
                                            Viernes</option>
                                        <option value="Sabado" {{ $row->dia == 'Sabado' ? 'selected' : '' }}>
                                            Sábado</option>
                                        <option value="Domingo" {{ $row->dia == 'Domingo' ? 'selected' : '' }}>
                                            Domingo</option>
                                    </select>
                                    <br>
                                    <label for="facultad">Facultad</label>
                                    <br><br>
                                    <select name="facultad" id="facultad" class="form-control" >
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
    @endcan
    @can('diaUsuarios.delete')
        <div class="me-2">
            <div class="me-2">
                <form id="deleteForm{{ $row->id }}" action="{{ route('diaUsuarios.destroy', $row->id) }}"
                    method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="button" class="btn btn-danger"
                        onclick="confirmDelete('{{ $row->id }}')">Eliminar</button>
                </form>
            </div>

            <script>
                function confirmDelete(id) {
                    Swal.fire({
                        title: '¿Estás seguro de eliminar este registro?',
                        text: 'Esta acción no se puede deshacer',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sí, eliminar',
                        cancelButtonText: 'Cancelar',
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            document.getElementById('deleteForm' + id).submit();
                        }
                    });
                }
            </script>
        </div>
    @endcan
</div>
