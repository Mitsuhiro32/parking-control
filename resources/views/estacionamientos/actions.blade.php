<div class="btn-group">
    @can('estacionamientos.update')
        <div class="me-2">
            <!-- Botón editar -->
            <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                data-bs-target="#editarEstacionamientoModal{{ $row->id }}">
                Editar
            </button>

            <!-- Modal para editar estacionamiento -->
            <div class="modal fade" id="editarEstacionamientoModal{{ $row->id }}" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="editarEstacionamientoModalLabel{{ $row->id }}"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="editarEstacionamientoModalLabel{{ $row->id }}">
                                Editar Estacionamiento
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <form action="{{ route('estacionamientos.update', $row) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <br><br>
                                    <input type="text" class="form-control" name="nombre" id="nombre"
                                        placeholder="Nombre" value="{{ $row->nombre }}">
                                    <br>
                                    <label for="capacidad">Capacidad</label>
                                    <br><br>
                                    <input type="number" class="form-control" name="capacidad" id="capacidad"
                                        placeholder="Capacidad" value="{{ $row->capacidad }}">
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
            <form action="{{ route('estacionamientos.update', $row) }}" method="POST">
                @csrf
                @method('PUT')
                <input type="hidden" name="estado" value="{{ $row->estado ? 0 : 1 }}">
                <button type="submit" class="btn btn-{{ $row->estado ? 'danger' : 'success' }}">
                    {{ $row->estado ? 'Desactivar' : 'Activar' }}
                </button>
            </form>
        </div>
    @endcan
</div>
