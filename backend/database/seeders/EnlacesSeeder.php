<?php

namespace Database\Seeders;

use App\Models\enlaces;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EnlacesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        enlaces::factory(10)->create();
    }
}
