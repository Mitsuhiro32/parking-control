<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'nombre' => 'Super Admin',
            'apellido' => 'Admin',
            'ci' => '1.234.567',
            'telefono' => '0985456123',
            'email' => 'admin@admin.com',
            'password' => bcrypt('Admin123'),
            'password_confirmation' => bcrypt('Admin123'),
            'rol' => 'Super Administrador',
            'autor' => 'Mitsuhiro',
        ])->assignRole('Super Administrador');
    }
}
