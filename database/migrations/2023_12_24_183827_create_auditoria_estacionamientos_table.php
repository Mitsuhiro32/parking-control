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
        Schema::create('auditoria_estacionamientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('estacionamiento_id')->references('id')->on('estacionamientos')->cascadeOnDelete();
            $table->string('capacidad');
            $table->string('estado');
            $table->string('accion');
            $table->string('autor');
            $table->timestamp('fecha_modificacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auditoria_estacionamientos');
    }
};