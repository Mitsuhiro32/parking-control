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
            'nombre' => 'Lunes',
        ]);
        Dia::create([
            'nombre' => 'Martes',
        ]);
        Dia::create([
            'nombre' => 'Miércoles',
        ]);
        Dia::create([
            'nombre' => 'Jueves',
        ]);
        Dia::create([
            'nombre' => 'Viernes',
        ]);
    }
}
