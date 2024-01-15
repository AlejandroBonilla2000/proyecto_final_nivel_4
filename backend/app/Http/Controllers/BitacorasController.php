<?php

namespace App\Http\Controllers;

use App\Models\bitacoras;
use Database\Seeders\BitacorasSeeder;
use Illuminate\Http\Request;

class BitacorasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return bitacoras::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $bitacoras= new bitacoras();
        $bitacoras->bitacora = $request->bitacora;
        $bitacoras->idusuario = $request->idusuario;
        $bitacoras->fecha = $request->fecha;
        $bitacoras->hora = $request->hora;
        $bitacoras->ip = $request->ip;
        $bitacoras->so = $request->so;
        $bitacoras->navegador = $request->navegador;
        $bitacoras->usuario = $request->usuario;
        $bitacoras->save();
        return 'bitacora guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(bitacoras $bitacoras)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(bitacoras $bitacoras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $bitacoras = bitacoras::find($id);
        $bitacoras->bitacora = $request->bitacora;
        $bitacoras->idusuario = $request->idusuario;
        $bitacoras->fecha = $request->fecha;
        $bitacoras->hora = $request->hora;
        $bitacoras->ip = $request->ip;
        $bitacoras->so = $request->so;
        $bitacoras->navegador = $request->navegador;
        $bitacoras->usuario = $request->usuario;
        $bitacoras->save();
        return ' bitacora actualizada';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $bitacoras= bitacoras::find($id);
        $bitacoras->delete();
        return 'bitacora eliminada';
    }
}
