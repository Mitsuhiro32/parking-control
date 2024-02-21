<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaUsuario;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class AuditoriaUsuarioDatatable extends DataTableComponent
{
    protected $model = AuditoriaUsuario::class;
    public ?int $searchFilterDebounce = 500;

    public function filters(): array
    {
        return [
            SelectFilter::make('Rol')
                ->options([
                    '' => 'Todos',
                    'Administrador' => 'Administrador',
                    'Usuario' => 'Usuario',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'Administrador') {
                        $builder->where(function ($query) {
                            $query->where('rol', 'Administrador')
                                ->orWhere('rol', 'Usuario -> Administrador');
                        });
                    } elseif ($value === 'Usuario') {
                        $builder->where(function ($query) {
                            $query->where('rol', 'Usuario')
                                ->orWhere('rol', 'Administrador -> Usuario');
                        });
                    }
                }),

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
            Column::make("Usuario", "usuario_id")
                ->sortable()
                ->searchable()
                ->format(function ($value) {
                    $usuario = User::find($value);
                    return $usuario ? $usuario->nombre : '';
                }),
            Column::make("Uid Tarjeta", "uid_tarjeta")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    return $value ? $value : "No asignado";
                }),
            Column::make("Rol", "rol")
                ->sortable(),
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
