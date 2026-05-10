<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('departments')->insert([
            ['name' => 'Academic Affairs', 'email' => 'academic@university.edu', 'phone' => '+1234567890'],
            ['name' => 'Student Services', 'email' => 'studentservices@university.edu', 'phone' => '+1234567891'],
            ['name' => 'Disability Support', 'email' => 'disability@university.edu', 'phone' => '+1234567892'],
            ['name' => 'Examination Office', 'email' => 'exams@university.edu', 'phone' => '+1234567893'],
            ['name' => 'Library Services', 'email' => 'library@university.edu', 'phone' => '+1234567894'],
            ['name' => 'Transportation Services', 'email' => 'transport@university.edu', 'phone' => '+1234567895'],
            ['name' => 'Facilities Management', 'email' => 'facilities@university.edu', 'phone' => '+1234567896'],
        ]);
    }
}