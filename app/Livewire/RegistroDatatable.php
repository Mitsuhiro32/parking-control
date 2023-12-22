<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Registro;
use App\Models\User;
use App\Models\Estacionamiento;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class RegistroDatatable extends DataTableComponent
{
    protected $model = Registro::class;
    public ?int $searchFilterDebounce = 500;

    public array $bulkActions = [
        'exportSelected' => 'Export',
    ];

    public function exportSelected()
    {
        dd($this->selectedKeys());
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Usuario')
                ->options(
                    User::all()->pluck('nombre', 'id')->toArray()
                )
                ->filter(function ($builder, $value) {
                    $builder->where('usuario_id', $value);
                }),

            SelectFilter::make('Estacionamiento')
                ->options(
                    Estacionamiento::all()->pluck('nombre', 'id')->toArray()
                )
                ->filter(function ($builder, $value) {
                    $builder->where('estacionamiento_id', $value);
                }),
        ];
    }

    public function configure(): void
    {
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
            Column::make("Fecha y hora de salida", "fecha_hora_salida")
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
                    fn ($row) => view(('Registros.actions'), compact('row'))->with([ 'usuarios' => $usuarios, 'estacionamientos' => $estacionamientos])
                )
        ];
    }
}
