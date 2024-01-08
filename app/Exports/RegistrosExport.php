<?php

namespace App\Exports;

use App\Models\Registro;
use Maatwebsite\Excel\Concerns\FromCollection;

class RegistrosExport implements FromCollection
{
    public $registros;

    public function __construct($registros)
    {
        $this->registros = $registros;
    }

    public function collection()
    {
        return Registro::whereIn('id', $this->registros)->get();
    }
}
