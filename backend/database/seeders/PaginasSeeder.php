<?php

namespace Database\Seeders;

use App\Models\paginas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaginasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        paginas::factory(10)->create();
    }
}
