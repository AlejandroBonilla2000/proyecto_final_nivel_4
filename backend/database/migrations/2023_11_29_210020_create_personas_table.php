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
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->string('primernombre');
            $table->string('segundonombre');
            $table->string('primerapellido');
            $table->string('segundoapellido');
            $table->string('fechacreacion');
            $table->string('fechamodificacion');
            $table->string('usuariocreacion');
            $table->string('usuariomodificacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
