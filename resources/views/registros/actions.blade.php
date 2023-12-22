<div>
    <!-- Botón ver -->
    @can('registros.view')
    <button type="button" class="btn btn-info" data-bs-toggle="modal"
        data-bs-target="#verRegistroModal{{ $row->id }}">
        Ver
    </button>

    <!-- Modal para ver registro -->
    <div class="modal fade" id="verRegistroModal{{ $row->id }}" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="verRegistroModalLabel{{ $row->id }}" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="verRegistroModalLabel{{ $row->id }}">
                        Detalle del Registro
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <label for="usuario_id">Usuario</label>
                    <br><br>
                    <input type="text" name="usuario_id" id="usuario_id" class="form-control"
                        value="{{ $row->usuario->nombre }}" disabled>
                    <br>
                    <label for="estacionamiento_id">Estacionamiento</label>
                    <br><br>
                    <input type="text" name="estacionamiento_id" id="estacionamiento_id" class="form-control"
                        value="{{ $row->estacionamiento->nombre }}" disabled>
                    <br>
                    <label for="fecha_hora_entrada">Fecha y Hora de Entrada</label>
                    <br><br>
                    <input type="text" name="fecha" id="fecha" class="form-control"
                        value="{{ $row->fecha_hora_entrada }}" disabled>
                    <br>
                    <label for="fecha_hora_salida">Fecha y Hora de Salida</label>
                    <br><br>
                    <input type="text" name="fecha" id="fecha" class="form-control"
                        value="{{ $row->fecha_hora_salida }}" disabled>
                    <br>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    @endcan
</div>
