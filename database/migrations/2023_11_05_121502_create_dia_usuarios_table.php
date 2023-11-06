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
            $table->id('dia_user_id');
            $table->foreignId('dia_habilitado_id')->references('dia_id')->on('dias')->cascadeOnDelete()->nullOnDelete();
            $table->foreignId('usuario_id')->references('id')->on('users')->cascadeOnDelete()->nullOnDelete();
            $table->string('dia_user_facultad');
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
