<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaEstacionamiento;

class AuditoriaEstacionamientoDatatable extends DataTableComponent
{
    protected $model = AuditoriaEstacionamiento::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Estacionamiento Id", "estacionamiento_id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Capacidad", "capacidad")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Estado", "estado")
                ->sortable()
                ->format(function ($value) {
                    if ($value == "true")
                        return 'Activo';
                    else
                        return 'Inactivo';
                }),
            Column::make("Acción", "accion")
                ->sortable(),
            Column::make("Autor", "autor")
                ->sortable(),
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
