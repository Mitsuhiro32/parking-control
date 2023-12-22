@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Usuarios</h1>
        </div>

        <!-- Botón nuevo -->
        @can('usuarios.store')
            <button type="button" id="nuevo-btn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoUsuarioModal">
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
                                        placeholder="Cédula"
                                        oninput="this.value = this.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
                                        required>
                                    <br>
                                    <label for="telefono">Teléfono</label>
                                    <br><br>
                                    <input type="tel" class="form-control" name="telefono" id="telefono"
                                        placeholder="Teléfono" required>
                                    <br>
                                    <label for="email">Correo Electrónico</label>
                                    <br><br>
                                    <input type="email" class="form-control" name="email" id="email"
                                        placeholder="Correo Electrónico" required>
                                    <br>
                                    <label for="password">Contraseña</label>
                                    <br><br>
                                    <input type="password" name="password"
                                        class="form-control @error('password') is-invalid @enderror" placeholder="Contraseña"
                                        autocomplete="off" required>
                                    <br>
                                    <div class="form-group">
                                        <label for="uid_tarjeta">UID Tarjeta</label>
                                        <br><br>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="uid_tarjeta" id="uid_tarjeta"
                                                placeholder="UID Tarjeta" readonly>
                                            <button class="btn btn-primary" type="button" id="asignar-btn">Asignar</button>
                                        </div>
                                        <br>
                                    </div>
                                    <label for="rol">Rol</label>
                                    <br><br>
                                    <select name="rol" id="rol" class="form-control" required>
                                        <option value="">Seleccione un rol</option>
                                        @foreach ($roles as $rol)
                                            <option value="{{ $rol->name }}">{{ $rol->name }}</option>
                                        @endforeach
                                    </select>
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

            <br><br>
        @endcan

        <!-- Datatable de usuarios -->
        @livewire('usuario-datatable')
    </div>

    <script>
        /**
         * ? Comprueba si el navegador admite WebSerial.
         * * si no lo admite, muestra un mensaje de alerta.
         */
        if ('serial' in navigator) {
            console.log('La API Web Serial está soportada en este navegador.')
        } else {
            alert("WebSerial no esta sorportado en este navegador. Prueba en Chrome, Edge o Opera.")
            console.log('La API Web Serial no está soportada en este navegador.')
        }

        var port;
        var tarjetaUID = ''; // Variable para almacenar el UID de la tarjeta

        document.getElementById('nuevo-btn').addEventListener('click', async () => {
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
                    alert('El puerto serie está ocupado, no se pudo conectar.');
                }
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
                        document.getElementById('uid_tarjeta').value = tarjetaUID;
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    writer.releaseLock();
                    reader.releaseLock();
                }
            }
        });

        // Cerrar el puerto serie al salir de la página o al recargar
        window.addEventListener('beforeunload', async (event) => {
            if (port) {
                // Si el puerto está abierto, revocar el permiso
                await port.forget();
                port = null;
            }
        });
    </script>
@endsection
