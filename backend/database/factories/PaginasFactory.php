<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\paginas>
 */
class PaginasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fechadecreacion'=>fake()->date(),
            'fechamodificacion'=>fake()->date(),
            'usuariocreacion'=>fake()->date(),
            'url'=>fake()->numberBetween(),
            'estado'=>fake()->boolean(),
            'nombre'=>fake()->firstName(),
            'descripcion'=>fake()->lastName(),
            'icono'=>fake()->firstName(),
            'tipo'=>fake()->boolean(),
        ];
    }
}
