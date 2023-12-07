@include('tablar::master')

@inject('layoutHelper', 'TakiElias\Tablar\Helpers\LayoutHelper')

@section('tablar_css')
    @stack('css')
    @yield('css')
@stop

@section('classes_body', $layoutHelper->makeBodyClasses())

@livewireScripts
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<x-livewire-alert::scripts />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

@includeIf('tablar::layouts.' . config('tablar.layout'))

@section('tablar_js')
    @stack('js')
    @yield('js')
@stop
