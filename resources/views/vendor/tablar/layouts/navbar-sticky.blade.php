<body>
@php
    $layoutData['cssClasses'] =  'navbar navbar-expand-md sticky-top d-print-none';
@endphp
<div class="page">
    <!-- Top Navbar -->
    <div class="sticky-top">
        @include('tablar::partials.navbar.topbar', $layoutData)
    </div>
    <div class="page-wrapper">
        <!-- Page Content -->
        @yield('content')
        @include('tablar::partials.footer.bottom')
    </div>
</div>
</body>
