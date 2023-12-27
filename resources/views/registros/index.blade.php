@extends('tablar::page')

@section('content')
    <div class="container">
        <div class="col">
            <br>
            <h1>Registros</h1>
        </div>

        <!-- Datatable de registros -->
        @livewire('registro-datatable')
        <br>
    </div>
@endsection
