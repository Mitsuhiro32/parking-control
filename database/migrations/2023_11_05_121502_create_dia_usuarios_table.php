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
            $table->foreignId('usuario_id')->references('id')->on('users')->cascadeOnDelete();
            $table->string('dia');
            $table->string('facultad');
            $table->string('autor');
            $table->timestamps();
            $table->softDeletes();
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
