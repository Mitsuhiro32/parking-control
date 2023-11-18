<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\DiaUsuario;
use App\Models\Dia;
use App\Models\User;

class DiaUsuarioDatatable extends DataTableComponent
{
    protected $model = DiaUsuario::class;
    public ?int $searchFilterDebounce = 500;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        $dias = Dia::all();
        $usuarios = User::all();

        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Dia habilitado id", "dia.nombre")
                ->sortable(),
            Column::make("Usuario id", "usuario.name")
                ->sortable(),
            Column::make("Facultad", "facultad")
                ->sortable(),
            Column::make('Acciones')
                ->label(
                    fn ($row) => view('diaUsuarios.actions')->with(['row' => $row, 'dias' => $dias, 'usuarios' => $usuarios])
                )
        ];
    }
}
