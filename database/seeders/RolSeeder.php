<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Creación de roles
        $roleAdmin = Role::create(['name' => 'Administrador']);
        $roleUsuario = Role::create(['name' => 'Usuario']);

        // Creación de permisos
        Permission::create(['name' => 'home'])->syncRoles([$roleAdmin, $roleUsuario]);

        // Permisos de la vista usuarios
        Permission::create(['name' => 'usuarios.index'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'usuarios.store'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'usuarios.update'])->syncRoles([$roleAdmin]);

        // Permisos de la vista estacionamientos
        Permission::create(['name' => 'estacionamientos.index'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'estacionamientos.store'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'estacionamientos.update'])->syncRoles([$roleAdmin]);

        // Permisos de la vista Habilitar Usuarios
        Permission::create(['name' => 'diaUsuarios.index'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'diaUsuarios.store'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'diaUsuarios.update'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'diaUsuarios.delete'])->syncRoles([$roleAdmin]);

        // Permisos de la vista Registros
        Permission::create(['name' => 'registros.index'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'registros.view'])->syncRoles([$roleAdmin]);

        // Permisos de la vista Auditoria
        Permission::create(['name' => 'auditoria'])->syncRoles([$roleAdmin]);
    }
}
