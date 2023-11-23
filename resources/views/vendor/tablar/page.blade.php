@include('tablar::master')

@inject('layoutHelper', 'TakiElias\Tablar\Helpers\LayoutHelper')

@section('tablar_css')
    @stack('css')
    @yield('css')
@stop

{{-- @section('css')
    <style>
        #loadingScreen {
            position: fixed;
            z-index: 999;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .loading-logo img {
            width: 100px;
            height: 100px;
        }
    </style>
@stop --}}

@section('classes_body', $layoutHelper->makeBodyClasses())

@includeIf('tablar::layouts.' . config('tablar.layout'))

@section('tablar_js')
    @stack('js')
    @yield('js')
@stop

{{-- @section('js')
    <script>
        window.addEventListener('load', function() {
            document.getElementById('loadingScreen').style.display = 'none';
        });
    </script>
@stop --}}
