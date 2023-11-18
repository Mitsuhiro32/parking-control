<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dia extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    public $table = 'dias';
    protected $fillable = [
        'nombre',
    ];

    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'dia_usuarios');
    }
}
