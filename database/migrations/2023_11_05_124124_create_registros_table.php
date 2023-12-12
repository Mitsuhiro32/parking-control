<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registros', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->references('id')->on('users');
            $table->foreignId('estacionamiento_id')->references('id')->on('estacionamientos');
            $table->timestamp('fecha_hora_entrada')->nullable();
            $table->timestamp('fecha_hora_salida')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registros');
    }
};
