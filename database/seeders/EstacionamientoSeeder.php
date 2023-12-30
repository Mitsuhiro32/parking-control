<?php

namespace Database\Seeders;

use App\Models\Estacionamiento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EstacionamientoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Estacionamiento::create([
            'nombre' => 'UNAE',
            'capacidad' => '26',
            'autor' => 'Mitsuhiro',
        ]);
    }
}
