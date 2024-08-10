<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaDiaUsuario;
use App\Models\DiaUsuario;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class AuditoriaDiaUsuarioDatatable extends DataTableComponent
{
    protected $model = AuditoriaDiaUsuario::class;
    public ?int $searchFilterDebounce = 500;

    public function filters(): array
    {
        return [
            /* SelectFilter::make('Dia habilitado')
                ->options([
                    '' => 'Todos',
                    'Lunes' => 'Lunes',
                    'Martes' => 'Martes',
                    'Miercoles' => 'Miercoles',
                    'Jueves' => 'Jueves',
                    'Viernes' => 'Viernes',
                    'Sabado' => 'Sabado',
                    'Domingo' => 'Domingo',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'Lunes') {
                        $builder->where('dia', 'Lunes');
                    } elseif ($value === 'Martes') {
                        $builder->where('dia', 'Martes');
                    } elseif ($value === 'Miercoles') {
                        $builder->where('dia', 'Miercoles');
                    } elseif ($value === 'Jueves') {
                        $builder->where('dia', 'Jueves');
                    } elseif ($value === 'Viernes') {
                        $builder->where('dia', 'Viernes');
                    } elseif ($value === 'Sabado') {
                        $builder->where('dia', 'Sabado');
                    } elseif ($value === 'Domingo') {
                        $builder->where('dia', 'Domingo');
                    }
                }),

            SelectFilter::make('Facultad')
                ->options([
                    '' => 'Todos',
                    'FACEM' => 'FACEM',
                    'FACAT' => 'FACAT',
                    'FCJHS' => 'FCJHS',
                    'FACSA' => 'FACSA',
                    'FACVA' => 'FACVA',
                    'ISEDE' => 'ISEDE',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'FACEM') {
                        $builder->where('facultad', 'FACEM');
                    } elseif ($value === 'FACAT') {
                        $builder->where('facultad', 'FACAT');
                    } elseif ($value === 'FCJHS') {
                        $builder->where('facultad', 'FCJHS');
                    } elseif ($value === 'FACSA') {
                        $builder->where('facultad', 'FACSA');
                    } elseif ($value === 'FACVA') {
                        $builder->where('facultad', 'FACVA');
                    } elseif ($value === 'ISEDE') {
                        $builder->where('facultad', 'ISEDE');
                    }
                }), */

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
        /* $this->setLoadingPlaceholderEnabled();
        $this->setLoadingPlaceholderContent('Cargando...'); */
        $this->setPrimaryKey('id');
        $this->setSingleSortingStatus(false);
        $this->setDefaultSort('fecha_modificacion', 'desc');
    }

    public function columns(): array
    {
        return [
            /* Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Dia Usuario Id", "dia_usuario_id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'), */
            Column::make("Usuario", "usuario_id")
                ->sortable()
                ->searchable()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    $ids = explode(' -> ', $value);
                    if (count($ids) === 2) {
                        $firstId = $ids[0];
                        $secondId = $ids[1];
                        $firstUser = User::find($firstId);
                        $secondUser = User::find($secondId);
                        $formattedValue = $firstUser ? $firstUser->nombre : '';
                        $formattedValue .= ' -> ';
                        $formattedValue .= $secondUser ? $secondUser->nombre : '';
                        return $formattedValue;
                    } else {
                        $userId = $value;
                        $usuario = User::find($userId);
                        return $usuario ? $usuario->nombre : '';
                    }
                }),
            Column::make("Día", "dia")
                ->sortable()
                ->searchable(),
            Column::make("Facultad", "facultad")
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
