<?php

namespace App\Http\Controllers;

use App\Models\personas;
use Illuminate\Http\Request;

class PersonasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return personas::all();
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
        $personas= new personas();
        $personas->primernombre = $request->primernombre;
        $personas->segundonombre = $request->segundonombre;
        $personas->primerapellido = $request->primerapellido;
        $personas->segundoapellido = $request->segundoapellido;
        $personas->fechacreacion = $request->fechacreacion;
        $personas->fechamodificacion = $request->fechamodificacion;
        $personas->usuariocreacion = $request->usuariocreacion;
        $personas->usuariomodificacion = $request->usuariomodificacion;
        $personas->save();
        return 'persona guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(personas $personas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(personas $personas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $personas= personas::find($id);
        $personas->primernombre = $request->primernombre;
        $personas->segundonombre = $request->segundonombre;
        $personas->primerapellido = $request->primerapellido;
        $personas->segundoapellido = $request->segundoapellido;
        $personas->fechacreacion = $request->fechacreacion;
        $personas->fechamodificacion = $request->fechamodificacion;
        $personas->usuariocreacion = $request->usuariocreacion;
        $personas->usuariomodificacion = $request->usuariomodificacion;
        $personas->save();
        return 'persona actualizada';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $enlaces= personas::find($id);
        $enlaces->delete();
        return 'enlace eliminado';   
    }
}
