<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'firstName' => 'Admin',
            'lastName' => '',
            'email' => 'admin@gmail.com',
            'studentId' => '0000001',
            'phone' => '123-456-7890',
            'password' => Hash::make('123456789Aa'),
            'role' => 'admin',

        ]);

        User::create([
            'firstName' => 'Student',
            'lastName' => '',
            'email' => 'student@gmail.com',
            'studentId' => '0000002',
            'role' => 'student',
            'phone' => '098-765-4321',
            'password' => Hash::make('123456789Aa'),
        ]);
    }
}
