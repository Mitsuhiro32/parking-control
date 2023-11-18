<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\User;

class UsuarioDatatable extends DataTableComponent
{
    protected $model = User::class;
    public ?int $searchFilterDebounce = 500;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Nombre", "name")
                ->sortable(),
            Column::make("Apellido", "apellido")
                ->sortable(),
            Column::make("Cedula", "ci")
                ->sortable(),
            Column::make("Teléfono", "telefono")
                ->sortable(),
            Column::make("Email", "email")
                ->sortable(),
            Column::make("Uid tarjeta", "uid_tarjeta")
                ->sortable(),
            Column::make("Estado", "estado")
                ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn ($row) => view('usuarios.actions', compact('row'))
                )
        ];
    }
}
