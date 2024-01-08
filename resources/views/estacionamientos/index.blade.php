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
            <br>
            <h1>Estacionamientos</h1>
        </div>

        @can('estacionamientos.store')
            <!-- Botón nuevo -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoEstacionamientoModal">
                Nuevo
            </button>

            <!-- Modal para crear nuevo estacionamiento -->
            <div class="modal fade" id="nuevoEstacionamientoModal" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="nuevoEstacionamientoModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="nuevoEstacionamientoModalLabel">Nuevo Estacionamiento</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <form action="{{ route('estacionamientos.store') }}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <br><br>
                                    <input type="text" class="form-control" name="nombre" id="nombre"
                                        placeholder="Nombre">
                                    <br>
                                    <label for="capacidad">Capacidad</label>
                                    <br><br>
                                    <input type="number" class="form-control" name="capacidad" id="capacidad"
                                        placeholder="Capacidad">
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
        @livewire('estacionamiento-datatable')
        <br>
    </div>

    <script>
        setTimeout(function() {
            $('#errorAlert').fadeOut('slow');
        }, 8000); // 8 segundos
    </script>
@endsection
