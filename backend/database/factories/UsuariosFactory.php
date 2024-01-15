<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\usuarios>
 */
class UsuariosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'idpersona'=>fake()->numberBetween(1,10),
            'name'=>fake()->firstName(),
            'usuario'=>fake()->email(),
            'clave'=>fake()->password(),
            'habilitado'=>fake()->boolean(),
            'fecha'=>fake()->date(),
            'idrol'=>fake()->numberBetween(1,10),
            'fechadecreacion'=>fake()->date(),
            'fechamodificacion'=>fake()->date(),
            'usuariocreacion'=>fake()->date(),
            'ususariomodificacion'=>fake()->date(),
            
        ];
    }
}
