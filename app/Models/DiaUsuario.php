<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiaUsuario extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $primaryKey = 'id';
    public $table = 'dia_usuarios';
    protected $fillable = [
        'usuario_id',
        'dia',
        'facultad',
        'autor'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function auditoria_dia_usuarios()
    {
        return $this->hasMany(AuditoriaDiaUsuario::class, 'dia_usuario_id');
    }
}
