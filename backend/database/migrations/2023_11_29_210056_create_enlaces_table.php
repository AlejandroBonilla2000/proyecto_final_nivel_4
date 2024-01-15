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
        Schema::create('enlaces', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idpagina');
            $table->foreign('idpagina')->references('id')->on('paginas')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('idrol');
            $table->foreign('idrol')->references('id')->on('roles')->onDelete('cascade')->onUpdate('cascade');
            $table->string('descripcion');
            $table->string('fechadecreacion');
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
        Schema::dropIfExists('enlaces');
    }
};
