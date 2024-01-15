<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\bitacoras>
 */
class BitacorasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bitacora'=>fake()->firstName(),
            'idusuario'=>fake()->numberBetween(1,10),
            'fecha'=>fake()->date(),
            'hora'=>fake()->time(),
            'ip'=>fake()->numberBetween(),
            'so'=>fake()->numberBetween(),
            'navegador'=>fake()->lastName(),
            'usuario'=>fake()->numberBetween(1.10),
        ];
    }
}
