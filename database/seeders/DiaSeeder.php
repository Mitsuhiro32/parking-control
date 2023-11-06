<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dia;

class DiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dia::create([
            'dia_nombre' => 'Lunes',
        ]);
        Dia::create([
            'dia_nombre' => 'Martes',
        ]);
        Dia::create([
            'dia_nombre' => 'Miércoles',
        ]);
        Dia::create([
            'dia_nombre' => 'Jueves',
        ]);
        Dia::create([
            'dia_nombre' => 'Viernes',
        ]);
    }
}
