<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estacionamiento extends Model
{
    use HasFactory;
    protected $primaryKey = 'est_id';
    public $table = 'estacionamientos';
    protected $fillable = [
        'est_nombre',
        'est_capacidad',
        'est_ocupado',
    ];

    public function registros()
    {
        return $this->hasMany(Registro::class, 'estacionamiento_id');
    }
}
