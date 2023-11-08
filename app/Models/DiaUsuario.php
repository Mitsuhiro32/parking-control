<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiaUsuario extends Model
{
    use HasFactory;
    protected $primaryKey = 'dia_user_id';
    public $table = 'dia_usuarios';
    protected $fillable = [
        'dia_habilitado_id',
        'usuario_id',
        'dia_user_facultad',
    ];
    public $timestamps = false;

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function dia()
    {
        return $this->belongsTo(Dia::class, 'dia_habilitado_id');
    }
}
