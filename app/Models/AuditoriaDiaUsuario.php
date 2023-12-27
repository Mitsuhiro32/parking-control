<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditoriaDiaUsuario extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $fillable = [
        'dia_usuario_id',
        'usuario_id',
        'dia',
        'facultad',
        'accion',
        'autor'
    ];

    public function dia_usuario()
    {
        return $this->belongsTo(DiaUsuario::class, 'dia_usuario_id');
    }
}
