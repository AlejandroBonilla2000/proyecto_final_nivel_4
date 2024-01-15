<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\enlaces>
 */
class EnlacesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'idpagina'=>fake()->numberBetween(1,10),
            'idrol'=>fake()->numberBetween(1,10),
            'descripcion'=>fake()->lastName(),
            'fechadecreacion'=>fake()->date(),
            'fechamodificacion'=>fake()->date(),
            'usuariocreacion'=>fake()->date(),
            'usuariomodificacion'=>fake()->date(),
        ];
    }
}
