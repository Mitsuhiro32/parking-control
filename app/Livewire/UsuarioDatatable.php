<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class UsuarioDatatable extends DataTableComponent
{
    protected $model = User::class;
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
        $this->setPrimaryKey('id');
        $this->setSingleSortingStatus(false);
        $this->setDefaultSort('id', 'asc');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable()
                ->collapseOnMobile(),
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
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Estado", "estado")
                ->sortable()
                ->format(function ($value) {
                    return $value ? 'Activo' : 'Inactivo';
                }),
            Column::make('Acciones')
                ->label(
                    fn ($row) => view('usuarios.actions', compact('row'))
                )
        ];
    }
}
