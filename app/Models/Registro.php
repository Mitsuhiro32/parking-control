<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    use HasFactory;
    protected $primaryKey = 'reg_id';
    public $table = 'registros';
    protected $fillable = [
        'usuario_id',
        'estacionamiento_id',
        'reg_hora_entrada',
        'reg_hora_salida',
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function estacionamiento()
    {
        return $this->belongsTo(Estacionamiento::class, 'estacionamiento_id');
    }
}
