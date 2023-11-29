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

@includeIf('tablar::layouts.' . config('tablar.layout'))

@section('tablar_js')
    @stack('js')
    @yield('js')
@stop
