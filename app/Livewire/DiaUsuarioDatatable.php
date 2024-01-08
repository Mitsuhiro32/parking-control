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

    public function filters(): array
    {
        return [
            SelectFilter::make('Dia habilitado')
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
