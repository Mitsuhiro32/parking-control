<!doctype html>
<html lang="{{ Config::get('app.locale') }}" {{ config('tablar.layout') == 'rtl' ? 'dir="rtl"' : '' }}>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{ asset('assets/logo.svg') }}" type="image/x-icon">
    {{-- Custom Meta Tags --}}
    @yield('meta_tags')
    {{-- Title --}}
    <title>
        @yield('title_prefix', config('tablar.title_prefix', ''))
        @yield('title', config('tablar.title', 'Sistema de Control de Estacionamiento'))
        @yield('title_postfix', config('tablar.title_postfix', ''))
    </title>
    <!-- CSS files -->
    @if (config('tablar', 'vite'))
        @vite('resources/js/app.js')
    @endif

    {{-- Custom Stylesheets (post Tablar) --}}
    @yield('tablar_css')
</head>
{{-- Tablar Body --}}
@yield('body')

{{-- Tablar JS --}}
@yield('tablar_js')
</html>
