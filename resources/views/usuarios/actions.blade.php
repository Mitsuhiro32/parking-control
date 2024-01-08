<div class="btn-group">
    @can('usuarios.update')
        <div class="me-2">
            @if ($row->rol != 'Super Administrador')
                <!-- Botón editar -->
                <button type="button" id="editar-btn{{ $row->id }}" class="btn btn-warning" data-bs-toggle="modal"
                    data-bs-target="#editarUsuariosModal{{ $row->id }}">
                    Editar
                </button>
            @else
                @role('Super Administrador')
                    <!-- Botón editar -->
                    <button type="button" id="editar-btn{{ $row->id }}" class="btn btn-warning" data-bs-toggle="modal"
                        data-bs-target="#editarUsuariosModal{{ $row->id }}">
                        Editar
                    </button>
                @endrole
            @endif
        </div>

        <!-- Modal para editar usuario -->
        <div class="modal fade" id="editarUsuariosModal{{ $row->id }}" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="editarUsuariosModalLabel{{ $row->id }}"
            aria-hidden="true">
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
                                    placeholder="Nombre" value="{{ $row->nombre }}" >
                                <br>
                                <label for="apellido">Apellido</label>
                                <br><br>
                                <input type="text" class="form-control" name="apellido" id="apellido"
                                    placeholder="Apellido" value="{{ $row->apellido }}" >
                                <br>
                                <label for="ci">Cédula de identidad</label>
                                <br><br>
                                <input type="text" class="form-control" name="ci" id="ci"
                                    placeholder="Cédula"
                                    oninput="this.value = this.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                    value="{{ $row->ci }}" >
                                <br>
                                <label for="telefono">Teléfono</label>
                                <br><br>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    placeholder="Teléfono" value="{{ $row->telefono }}" >
                                <br>
                                <label for="email">Correo Electrónico</label>
                                <br><br>
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Correo Electrónico" value="{{ $row->email }}" >
                                <br>
                                {{-- <label for="password">Contraseña</label>
                                <br><br>
                                <input type="password" class="form-control" name="password" id="password"
                                    placeholder="Contraseña" value="{{ $row->password }}">
                                <br> --}}
                                <div class="form-group">
                                    <label for="uid_tarjeta">UID Tarjeta</label>
                                    <br><br>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="uid_tarjeta" id="uid_tarjeta"
                                            data-id="uid{{ $row->id }}" placeholder="UID Tarjeta"
                                            value="{{ $row->uid_tarjeta }}" readonly>
                                        <button class="btn btn-primary" type="button"
                                            id="asignarUID{{ $row->id }}">Asignar</button>
                                    </div>
                                    <br>
                                </div>
                                @if ($row->rol != 'Super Administrador')
                                    <label for="rol">Rol</label>
                                    <br><br>
                                    <select class="form-select" name="rol" id="rol" >
                                        <option value="Administrador" {{ $row->rol == 'Administrador' ? 'selected' : '' }}>
                                            Administrador</option>
                                        <option value="Usuario" {{ $row->rol == 'Usuario' ? 'selected' : '' }}>Usuario
                                        </option>
                                    </select>
                                @endif
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
            @if ($row->rol != 'Super Administrador')
                <form action="{{ route('usuarios.update', $row) }}" method="POST">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="estado" value="{{ $row->estado ? 0 : 1 }}">
                    <button type="submit" class="btn btn-{{ $row->estado ? 'danger' : 'success' }}">
                        {{ $row->estado ? 'Desactivar' : 'Activar' }}
                    </button>
                    @if ($row->estado = 1)
                        <input type="hidden" name="uid_tarjeta" value="{{ $row->uid_tarjeta = null }}">
                    @endif
                </form>
            @endif
        </div>
    @endcan
</div>

<script>
    var port;
    var tarjetaUID = ''; // Variable para almacenar el UID de la tarjeta

    document.getElementById('editar-btn{{ $row->id }}').addEventListener('click', async () => {
        if (port != null) {
            // Si ya hay un puerto serie abierto, mostrar un mensaje
            console.log('Ya hay un puerto serie abierto');
        } else {
            try {
                // Si no hay un puerto serie abierto, solicitar uno
                port = await navigator.serial.requestPort();

                await port.open({
                    baudRate: 9600,
                    dataBits: 8,
                    stopBits: 1,
                    parity: 'none',
                    flowControl: 'none'
                });

                // Mostrar un mensaje si se pudo conectar correctamente al puerto serie
                console.log('Puerto abierto correctamente');
            } catch (error) {
                // Mostrar una alerta con el mensaje de error
                Swal.fire({
                    icon: 'error',
                    title: 'El puerto serie no está disponible o está ocupado.',
                    text: 'Por favor, verifica la disponibilidad del puerto serie.',
                });
            }
        }
    });

    document.getElementById('asignarUID{{ $row->id }}').addEventListener('click', async () => {
        document.querySelector('[data-id="uid{{ $row->id }}"]').value = ''; // Limpiar el campo
        tarjetaUID = ''; // Limpiar la variable
        // Escribir datos
        const writer = port.writable.getWriter();
        const encoder = new TextEncoder();
        await writer.write(encoder.encode('a'));
        console.log('Datos enviados correctamente');
        writer.releaseLock(); // Liberar el writer

        // Leer datos
        while (port.readable) {
            const reader = port.readable.getReader();
            const decoder = new TextDecoder();

            try {
                while (true) {
                    const {
                        value,
                        done
                    } = await reader.read();
                    if (done) {
                        reader.releaseLock();
                        break;
                    }
                    tarjetaUID += decoder.decode(value); // Concatenar los valores leídos
                    console.log('UID Tarjeta: ' + tarjetaUID);
                    document.querySelector('[data-id="uid{{ $row->id }}"]').value = tarjetaUID;
                }
            } catch (error) {
                console.log(error);
            } finally {
                writer.releaseLock();
                reader.releaseLock();
            }
        }
    });
</script>
