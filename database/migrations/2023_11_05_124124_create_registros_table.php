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
            $table->id('reg_id');
            $table->foreignId('usuario_id')->references('id')->on('users')->cascadeOnDelete()->nullOnDelete();
            $table->foreignId('estacionamiento_id')->references('est_id')->on('estacionamientos')->cascadeOnDelete()->nullOnDelete();
            $table->timestamp('reg_hora_entrada')->nullable();
            $table->timestamp('reg_hora_salida')->nullable();
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
