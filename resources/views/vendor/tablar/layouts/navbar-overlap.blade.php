<body>
@php
    $layoutData['cssClasses'] =  'navbar navbar-expand-md navbar-overlap d-print-none';
@endphp
<div class="page">
    <!-- Top Navbar -->
    @include('tablar::partials.navbar.overlap-topbar', $layoutData)
    <div class="page-wrapper">
        <!-- Page Content -->
        @yield('content')
        @include('tablar::partials.footer.bottom')
    </div>
</div>
</body>
