<?php

namespace App\Livewire;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AuditoriaUsuario;
use App\Models\User;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class AuditoriaUsuarioDatatable extends DataTableComponent
{
    protected $model = AuditoriaUsuario::class;

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
            Column::make("Usuario", "usuario_id")
                ->sortable()
                ->setSortingPillDirections('Asc', 'Desc')
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
                ->sortable()
                ->format(function ($value) {
                    if($value == "true")
                        return 'Activo';
                    else
                        return 'Inactivo';
                }),
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
