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
        Schema::create('auditoria_dia_usuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dia_usuario_id')->references('id')->on('dia_usuarios')->cascadeOnDelete();
            $table->string('usuario_id');
            $table->string('dia');
            $table->string('facultad');
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
        Schema::dropIfExists('auditoria_dia_usuarios');
    }
};
