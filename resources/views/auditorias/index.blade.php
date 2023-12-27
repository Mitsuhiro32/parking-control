@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Auditorias</h1>
            <div class="btn-group d-flex justify-content-between" role="group" aria-label="Menu">
                <button type="button" class="btn btn-outline-primary active" onclick="mostrarTabla('usuario')" id="btn-usuario">Auditoria de Usuarios</button>
                <button type="button" class="btn btn-outline-primary" onclick="mostrarTabla('estacionamiento')" id="btn-estacionamiento">Auditoria de Estacionamientos</button>
                <button type="button" class="btn btn-outline-primary" onclick="mostrarTabla('dia-usuario')" id="btn-dia-usuario">Auditoria de Días Hábiles de Usuarios</button>
            </div>
        </div>
        <br>
        <div id="tabla-usuario" style="display: block;">
            <!-- Datatable de auditoria de usuarios -->
            @livewire('auditoria-usuario-datatable')
        </div>
        <div id="tabla-estacionamiento" style="display: none;">
            <!-- Datatable de auditoria de estacionamientos -->
            @livewire('auditoria-estacionamiento-datatable')
        </div>
        <div id="tabla-dia-usuario" style="display: none;">
            <!-- Datatable de auditoria de dias habiles de usuarios -->
            @livewire('auditoria-dia-usuario-datatable')
        </div>
        <br>
    </div>
@endsection

<script>
    function mostrarTabla(tabla) {
        document.getElementById('tabla-usuario').style.display = 'none';
        document.getElementById('tabla-estacionamiento').style.display = 'none';
        document.getElementById('tabla-dia-usuario').style.display = 'none';

        // Remover la clase 'active' de todos los botones
        document.getElementById('btn-usuario').classList.remove('active');
        document.getElementById('btn-estacionamiento').classList.remove('active');
        document.getElementById('btn-dia-usuario').classList.remove('active');

        if (tabla === 'usuario') {
            document.getElementById('tabla-usuario').style.display = 'block';
            document.getElementById('btn-usuario').classList.add('active');
        } else if (tabla === 'estacionamiento') {
            document.getElementById('tabla-estacionamiento').style.display = 'block';
            document.getElementById('btn-estacionamiento').classList.add('active');
        } else if (tabla === 'dia-usuario') {
            document.getElementById('tabla-dia-usuario').style.display = 'block';
            document.getElementById('btn-dia-usuario').classList.add('active');
        }
    }
</script>
