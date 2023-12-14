<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Spatie\Permission\Models\Role;

class UsuarioDatatable extends DataTableComponent
{
    protected $model = User::class;
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
            SelectFilter::make('Rol')
                ->options([
                    '' => 'Todos',
                    'Administrador' => 'Administrador',
                    'Usuario' => 'Usuario',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'Administrador') {
                        $builder->whereHas('roles', function ($query) {
                            $query->where('name', 'Administrador');
                        });
                    } elseif ($value === 'Usuario') {
                        $builder->whereHas('roles', function ($query) {
                            $query->where('name', 'Usuario');
                        });
                    }
                }),
            SelectFilter::make('UID Tarjeta')
                ->options([
                    '' => 'Todos',
                    '1' => 'Asignado',
                    '0' => 'No asignado',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->whereNotNull('uid_tarjeta');
                    } elseif ($value === '0') {
                        $builder->whereNull('uid_tarjeta');
                    }
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
        return [
            Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Nombre", "nombre")
                ->sortable()
                ->searchable(),
            Column::make("Apellido", "apellido")
                ->sortable()
                ->searchable(),
            Column::make("Cédula de Identidad", "ci")
                ->sortable()
                ->searchable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Teléfono", "telefono")
                ->sortable()
                ->collapseOnMobile()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Email", "email")
                ->sortable()
                ->collapseOnMobile(),
            Column::make("Uid tarjeta", "uid_tarjeta")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    return $value ? $value : "No asignado";
                }),
            Column::make("Rol", "rol")
                ->sortable(),
            BooleanColumn::make("Estado", "estado")
                ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn ($row) => view('usuarios.actions', compact('row'))
                )
                // ->hideIf(!auth()->user()->can('usuarios.editar') && !auth()->user()->can('usuarios.desactivar'))
        ];
    }
}
