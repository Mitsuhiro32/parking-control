<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estacionamiento extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    public $table = 'estacionamientos';
    protected $fillable = [
        'nombre',
        'capacidad',
        'ocupado',
    ];

    public function registros()
    {
        return $this->hasMany(Registro::class, 'estacionamiento_id');
    }
}
