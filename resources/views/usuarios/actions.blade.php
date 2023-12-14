<div class="btn-group">
    @can('usuarios.update')
        <div class="me-2">
            <!-- Botón editar -->
            <button type="button" id="editar-btn" class="btn btn-warning" data-bs-toggle="modal"
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
                                <label for="ci">Cédula de identidad</label>
                                <br><br>
                                <input type="text" class="form-control" name="ci" id="ci"
                                    placeholder="Cédula"
                                    oninput="this.value = this.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                    value="{{ $row->ci }}" required>
                                <br>
                                <label for="telefono">Teléfono</label>
                                <br><br>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    placeholder="Teléfono" value="{{ $row->telefono }}" required>
                                <br>
                                <label for="email">Correo Electrónico</label>
                                <br><br>
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="Correo Electrónico" value="{{ $row->email }}" required>
                                <br>
                                {{-- <label for="password">Contraseña</label>
                                <br><br>
                                <input type="password" class="form-control" name="password" id="password"
                                    placeholder="Contraseña" value="{{ $row->password }}">
                                <br> --}}
                                <label for="uid_tarjeta">UID Tarjeta</label>
                                <br><br>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="uid_tarjeta" id="uid_tarjeta"
                                        placeholder="UID Tarjeta" value="{{ $row->uid_tarjeta }}" readonly>
                                    <button class="btn btn-primary" type="button" id="asignar-btn">Asignar</button>
                                </div>
                                <br>
                                <label for="rol">Rol</label>
                                <br><br>
                                <select class="form-select" name="rol" id="rol" required>
                                    <option value="Administrador" {{ $row->rol == 'Administrador' ? 'selected' : '' }}>Administrador</option>
                                    <option value="Usuario" {{ $row->rol == 'Usuario' ? 'selected' : '' }}>Usuario</option>
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
        <div class="me-2">
            <form action="{{ route('usuarios.update', $row) }}" method="POST">
                @csrf
                @method('PUT')
                <input type="hidden" name="estado" value="{{ $row->estado ? 0 : 1 }}">
                {{-- <input type="hidden" name="uid_tarjeta" value="{{ $row->estado ? $row->uid_tarjeta : null }}"> --}}
                <button type="submit" class="btn btn-{{ $row->estado ? 'danger' : 'success' }}">
                    {{ $row->estado ? 'Desactivar' : 'Activar' }}
                </button>
            </form>
        </div>
    @endcan
</div>

<script>
    var port;
    var tarjetaUID = ''; // Variable para almacenar el UID de la tarjeta

    document.getElementById('editar-btn').addEventListener('click', async () => {
        // Obtener el puerto serie
        const ports = await navigator.serial.getPorts();

        if (port) {
            // Si ya hay un puerto serie abierto, mostrar un mensaje
            console.log('Ya hay un puerto serie abierto');
        } else {
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
        }
    });

    document.getElementById('asignar-btn').addEventListener('click', async () => {
        document.getElementById('uid_tarjeta').value = ''; // Limpiar el campo
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
                // let continuarLeyendo = true;

                while (true) {
                    const {
                        value,
                        done
                    } = await reader.read();
                    if (done) {
                        // continuarLeyendo = false; // Cambiar el valor para salir del bucle
                        reader.releaseLock();
                        break;
                    }
                    tarjetaUID += decoder.decode(value); // Concatenar los valores leídos
                    console.log('UID Tarjeta: ' + tarjetaUID);
                    document.getElementById('uid_tarjeta').value = tarjetaUID;
                }
            } catch (error) {
                console.log(error);
            } finally {
                readable.cancel();
            }
        }
    });

    document.getElementById('cancelar-btn').addEventListener('click', async () => {
        document.getElementById('uid_tarjeta').value = ''; // Limpiar el campo
        await port.close(); // Cerrar el puerto serie
        console.log('Puerto cerrado correctamente');
    });
</script>
