<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaEstacionamiento;
use App\Models\Estacionamiento;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class AuditoriaEstacionamientoDatatable extends DataTableComponent
{
    protected $model = AuditoriaEstacionamiento::class;
    public ?int $searchFilterDebounce = 500;

    public function filters(): array
    {
        return [
            SelectFilter::make('Estado')
                ->options([
                    '' => 'Todos',
                    '1' => 'Activo',
                    '0' => 'Inactivo',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->where(function ($query) {
                            $query->where('estado', 'Activo')
                                ->orWhere('estado', 'Inactivo -> Activo');
                        });
                    } elseif ($value === '0') {
                        $builder->where(function ($query) {
                            $query->where('estado', 'Inactivo')
                                ->orWhere('estado', 'Activo -> Inactivo');
                        });
                    }
                }),

            SelectFilter::make('Acción')
                ->options([
                    '' => 'Todos',
                    'INSERT' => 'INSERT',
                    'UPDATE' => 'UPDATE',
                    'DELETE' => 'DELETE',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'INSERT') {
                        $builder->where('accion', 'INSERT');
                    } elseif ($value === 'UPDATE') {
                        $builder->where('accion', 'UPDATE');
                    } elseif ($value === 'DELETE') {
                        $builder->where('accion', 'DELETE');
                    }
                }),
        ];
    }

    public function configure(): void
    {
        $this->setLoadingPlaceholderEnabled();
        $this->setLoadingPlaceholderContent('Cargando...');
        $this->setPrimaryKey('id');
        $this->setSingleSortingStatus(false);
        $this->setDefaultSort('fecha_modificacion', 'desc');
    }

    public function columns(): array
    {
        return [
            /* Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'), */
            Column::make("Estacionamiento", "estacionamiento_id")
                ->sortable()
                ->searchable()
                ->format(function ($value) {
                    $estacionamiento = Estacionamiento::find($value);
                    return $estacionamiento ? $estacionamiento->nombre : '';
                }),
            Column::make("Capacidad", "capacidad")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Estado", "estado")
                ->sortable(),
            Column::make("Acción", "accion")
                ->sortable(),
            Column::make("Autor", "autor")
                ->sortable()
                ->searchable(),
            Column::make("Fecha Modificación", "fecha_modificacion")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    if ($value) {
                        return date('d/m/Y H:i:s', strtotime($value));
                    }
                }),
        ];
    }
}
