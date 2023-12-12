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
        Schema::create('dia_usuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dia_habilitado_id')->references('id')->on('dias')->cascadeOnDelete();
            $table->foreignId('usuario_id')->references('id')->on('users')->cascadeOnDelete();
            $table->string('facultad');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dia_usuarios');
    }
};
