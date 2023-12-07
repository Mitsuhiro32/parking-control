@extends('tablar::page')

@section('content')
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Estacionamientos Ocupados
                    </div>
                    <div class="card-body">
                        <canvas id="donutChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        var ctx = document.getElementById('donutChart').getContext('2d');
        var donutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Ocupados', 'Disponibles'],
                datasets: [{
                    data: [{{ 5 }}, {{ 32 }}],
                    backgroundColor: ['#FF0000', '#00FF'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    </script>

    <style>
        .card {
            margin-top: 20px;
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
    </style>
@endsection
