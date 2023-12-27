<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditoriaEstacionamiento extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $fillable = [
        'estacionamiento_id',
        'capacidad',
        'estado',
        'accion',
        'autor'
    ];

    public function estacionamiento()
    {
        return $this->belongsTo(Estacionamiento::class, 'estacionamiento_id');
    }
}
