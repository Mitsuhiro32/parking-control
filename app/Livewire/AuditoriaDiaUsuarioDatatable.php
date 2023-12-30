<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaDiaUsuario;
use App\Models\User;

class AuditoriaDiaUsuarioDatatable extends DataTableComponent
{
    protected $model = AuditoriaDiaUsuario::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Dia Usuario Id", "dia_usuario_id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc'),
            Column::make("Usuario", "usuario_id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc')
                ->format(function ($value) {
                    $usuario = User::find($value);
                    return $usuario ? $usuario->nombre : '';
                }),
            Column::make("Día", "dia")
                ->sortable(),
            Column::make("Facultad", "facultad")
                ->sortable(),
            Column::make("Acción", "accion")
                ->sortable(),
            Column::make("Autor", "autor")
                ->sortable(),
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
