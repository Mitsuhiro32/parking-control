@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            @if ($errors->any())
                <div class="alert alert-danger" id="errorAlert">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <h1>Días Hábiles de Usuarios</h1>
        </div>

        @can('diaUsuarios.store')
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
                                    <select name="usuario_id" id="usuario_id" class="form-control" >
                                        <option value="">Seleccione un usuario</option>
                                        @foreach ($usuarios as $u)
                                            <option value="{{ $u->id }}">{{ $u->nombre }}</option>
                                        @endforeach
                                    </select>
                                    <br>
                                    <label for="dia">Día</label>
                                    <br><br>
                                    <select name="dia" id="dia" class="form-control" >
                                        <option value="">Seleccione un día</option>
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miercoles">Miercoles</option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sabado">Sabado</option>
                                        <option value="Domingo">Domingo</option>
                                    </select>
                                    <br>
                                    <label for="facultad">Facultad</label>
                                    <br><br>
                                    <select name="facultad" id="facultad" class="form-control" >
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
                            <button type="submit" class="btn btn-primary"
                                onclick="this.disabled=true; this.form.submit();">Guardar</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

            <br><br>
        @endcan

        <!-- Datatable de estacionamientos -->
        @livewire('dia-usuario-datatable')
        <br>
    </div>

    <script>
        setTimeout(function() {
            $('#errorAlert').fadeOut('slow');
        }, 8000); // 8 segundos
    </script>
@endsection
