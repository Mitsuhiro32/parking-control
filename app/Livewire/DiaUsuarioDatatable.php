<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\DiaUsuario;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class DiaUsuarioDatatable extends DataTableComponent
{
    protected $model = DiaUsuario::class;
    public ?int $searchFilterDebounce = 500;

    /* public array $bulkActions = [
        'exportSelected' => 'Export',
    ];

    public function exportSelected()
    {
        dd($this->selectedKeys());
    } */

    public function filters(): array
    {
        return [
            /* SelectFilter::make('Estado')
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
                }), */

            SelectFilter::make('Dia habilitado')
                ->options(
                    DiaUsuario::all()->pluck('dia', 'dia')->toArray(),
                )
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('dia', $value);
                }),

            SelectFilter::make('Facultad')
                ->options(
                    DiaUsuario::all()->pluck('facultad', 'facultad')->toArray()
                )
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('facultad', $value);
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

        return [
            Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Usuario", "usuario_id")
                ->searchable()
                ->sortable()
                ->format(function ($value) {
                    $usuario = User::find($value);
                    return $usuario ? $usuario->nombre : '';
                }),
            Column::make("Dia habilitado", "dia")
                ->sortable()
                ->searchable(),
            Column::make("Facultad", "facultad")
                ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn ($row) => view(('diaUsuarios.actions'), compact('row'))->with(['usuarios' => $usuarios])
                )
                // ->hideIf(!auth()->user()->can('diaUsuarios.editar') && !auth()->user()->can('diaUsuarios.eliminar'))
        ];
    }
}
