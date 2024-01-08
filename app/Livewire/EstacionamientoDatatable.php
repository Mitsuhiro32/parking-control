<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Estacionamiento;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class EstacionamientoDatatable extends DataTableComponent
{
    protected $model = Estacionamiento::class;

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
                        $builder->where('estado', true);
                    } elseif ($value === '0') {
                        $builder->where('estado', false);
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
        $this->setDefaultSort('id', 'asc');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Nombre", "nombre")
                ->sortable()
                ->searchable(),
            Column::make("Capacidad", "capacidad")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Ocupado", "ocupado")
                ->sortable()
                ->collapseOnMobile()
                ->setSortingPillDirections('Asc', 'Desc'),
            BooleanColumn::make("Estado", "estado")
            ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn($row) => view('estacionamientos.actions', compact('row'))
                )
                // ->hideIf(!auth()->user()->can('estacionamientos.editar') && !auth()->user()->can('estacionamientos.desactivar'))
        ];
    }
}
