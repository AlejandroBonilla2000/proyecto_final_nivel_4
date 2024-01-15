<?php

namespace Database\Seeders;

use App\Models\bitacoras;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BitacorasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        bitacoras::factory(10)->create();
    }
}
