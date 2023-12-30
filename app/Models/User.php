<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'apellido',
        'ci',
        'telefono',
        'email',
        'password',
        'uid_tarjeta',
        'rol',
        'estado',
        'autor'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function registros()
    {
        return $this->hasMany(Registro::class, 'usuario_id');
    }

    public function diaUsuario()
    {
        return $this->hasMany(DiaUsuario::class, 'usuario_id');
    }

    public function auditoria_usuarios()
    {
        return $this->hasMany(AuditoriaUsuario::class, 'usuario_id');
    }
}
