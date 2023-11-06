<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dia extends Model
{
    use HasFactory;
    protected $primaryKey = 'dia_id';
    public $table = 'dias';
    protected $fillable = [
        'dia_nombre',
    ];

    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'dia_usuarios');
    }
}
