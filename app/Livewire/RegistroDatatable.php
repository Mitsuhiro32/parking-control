<?php

namespace App\Livewire;

use App\Exports\RegistrosExport;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Registro;
use App\Models\User;
use App\Models\Estacionamiento;
use Maatwebsite\Excel\Facades\Excel;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class RegistroDatatable extends DataTableComponent
{
    protected $model = Registro::class;
    public ?int $searchFilterDebounce = 500;

    /* public array $bulkActions = [
        'exportSelected' => 'Exportar',
    ];

    public function exportSelected()
    {
        $registros = $this->getSelected();
        $this->clearSelected();
        return Excel::download(new RegistrosExport($registros), 'registros.xlsx');
    } */

    public function filters(): array
    {
        return [
            SelectFilter::make('Usuario')
                ->options(
                    [null => 'Todos'] + User::all()->pluck('nombre', 'id')->toArray()
                )
                ->filter(function ($builder, $value) {
                    $builder->where('usuario_id', $value);
                }),
            SelectFilter::make('Estacionamiento')
                ->options(
                    [null => 'Todos'] + Estacionamiento::all()->pluck('nombre', 'id')->toArray()
                )
                ->filter(function ($builder, $value) {
                    $builder->where('estacionamiento_id', $value);
                }),
            SelectFilter::make('Fecha')
                ->options([
                    '' => 'Todos',
                    '1' => 'Hoy',
                    '2' => 'Ayer',
                    '3' => 'Esta semana',
                    '4' => 'Semana pasada',
                    '5' => 'Este mes',
                    '6' => 'Mes pasado',
                    '7' => 'Este año',
                    '8' => 'Año pasado',
                ])
                ->filter(function ($builder, $value) {
                    if ($value === '1') {
                        $builder->whereDate('fecha_hora_entrada', date('Y-m-d'));
                    } elseif ($value === '2') {
                        $builder->whereDate('fecha_hora_entrada', date('Y-m-d', strtotime('-1 day')));
                    } elseif ($value === '3') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-m-d', strtotime('monday this week')), date('Y-m-d', strtotime('sunday this week'))]);
                    } elseif ($value === '4') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-m-d', strtotime('monday last week')), date('Y-m-d', strtotime('sunday last week'))]);
                    } elseif ($value === '5') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-m-01'), date('Y-m-t')]);
                    } elseif ($value === '6') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-m-01', strtotime('last month')), date('Y-m-t', strtotime('last month'))]);
                    } elseif ($value === '7') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-01-01'), date('Y-12-31')]);
                    } elseif ($value === '8') {
                        $builder->whereBetween('fecha_hora_entrada', [date('Y-01-01', strtotime('last year')), date('Y-12-31', strtotime('last year'))]);
                    }
                }),
        ];
    }

    public function configure(): void
    {
        /* $this->setLoadingPlaceholderEnabled();
        $this->setLoadingPlaceholderContent('Cargando...'); */
        $this->setPrimaryKey('id');
        $this->setSingleSortingStatus(false);
        $this->setDefaultSort('id', 'asc');
    }

    public function columns(): array
    {
        $usuarios = User::all();
        $estacionamientos = Estacionamiento::all();

        return [
            Column::make("Id", "id")
                ->sortable()
                ->deselected() 
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Usuario", "usuario_id")
                ->sortable()
                ->searchable()
                ->format(function ($value) {
                    $usuario = User::find($value);
                    return $usuario ? $usuario->nombre : '';
                }),
            Column::make("Estacionamiento", "estacionamiento_id")
                ->sortable()
                ->format(function ($value) {
                    $estacionamiento = Estacionamiento::find($value);
                    return $estacionamiento ? $estacionamiento->nombre : '';
                }),
            Column::make("Fecha y hora entrada", "fecha_hora_entrada")
                ->sortable()
                ->collapseOnMobile()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    return date('d/m/Y H:i', strtotime($value));
                }),
            Column::make("Fecha y hora salida", "fecha_hora_salida")
                ->sortable()
                ->collapseOnMobile()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    if ($value) {
                        return date('d/m/Y H:i', strtotime($value));
                    } else {
                        return '';
                    }
                }),
            Column::make('Acciones')
                ->label(
                    fn($row) => view(('registros.actions'), compact('row'))->with(['usuarios' => $usuarios, 'estacionamientos' => $estacionamientos])
                )
        ];
    }
}
