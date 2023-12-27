<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditoriaUsuario extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $fillable = [
        'usuario_id',
        'uid_tarjeta',
        'rol',
        'estado',
        'accion',
        'autor'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }
}
