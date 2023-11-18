<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Estacionamiento;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;

class EstacionamientoDatatable extends DataTableComponent
{
    protected $model = Estacionamiento::class;

    public ?int $searchFilterDebounce = 500;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setSingleSortingStatus(false);
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Nombre", "nombre")
                ->sortable(),
            Column::make("Capacidad", "capacidad")
                ->sortable(),
            Column::make("Ocupado", "ocupado")
                ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn($row) => view('estacionamientos.actions', compact('row'))
                )
        ];

    }
}
