@extends('tablar::page')

@section('content')
    <br>
    <div class="container-fluid">
        <div class="row">
            @foreach ($estacionamientos as $e)
                @if ($e->estado == true)
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Estacionamiento: {{ $e->nombre }}
                            </div>
                            <div class="card-body">
                                <canvas id="donutChart{{ $e->id }}"></canvas>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between">
                                    <label>Disponibles: {{ $e->capacidad - $e->ocupado }} </label>
                                    <label>Ocupados: {{ $e->ocupado }} </label>
                                </div>
                            </div>

                            <script>
                                var ctx{{ $e->id }} = document.getElementById('donutChart{{ $e->id }}').getContext('2d');
                                var donutChart{{ $e->id }} = new Chart(ctx{{ $e->id }}, {
                                    type: 'doughnut',
                                    data: {
                                        labels: ['Ocupados', 'Disponibles'],
                                        datasets: [{
                                            data: [{{ $e->ocupado }}, {{ $e->capacidad - $e->ocupado }}],
                                            backgroundColor: ['#FF0000', '#00FF'],
                                            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                                        }]
                                    },
                                    options: {
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        hoverOffset: 10,
                                        layout: {
                                            padding: 10
                                        },
                                        plugins: {
                                            legend: {
                                                display: true,
                                                labels: {
                                                    color: 'white',
                                                    font: {
                                                        size: 12
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                            </script>
                        </div>
                    </div>
                @endif
            @endforeach
        </div>
    </div>

    <style>
        .card {
            margin-top: 10px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .card-header {
            background-color: #F8F9FA;
            font-weight: bold;
            padding: 10px;
            border-bottom: 1px solid #E9ECEF;
        }

        .card-body {
            padding: 20px;
        }

        @media (max-width: 768px) {
            .col-md-6 {
                width: 100%;
            }
        }
    </style>
@endsection
