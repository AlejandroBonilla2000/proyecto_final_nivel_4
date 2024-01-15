<?php

namespace App\Http\Controllers;

use App\Models\enlaces;
use Illuminate\Http\Request;

class EnlacesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return enlaces::all();
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
        $enlaces= new enlaces();
        $enlaces->idpagina = $request->idpagina;
        $enlaces->idrol = $request->idrol;
        $enlaces->descripcion = $request->descripcion;
        $enlaces->fechadecreacion = $request->fechadecreacion;
        $enlaces->fechamodificacion = $request->fechamodificacion;
        $enlaces->usuariocreacion = $request->usuariocreacion;
        $enlaces->usuariomodificacion = $request->usuariomodificacion;
        $enlaces->save();
        return 'enlace guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(enlaces $enlaces)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(enlaces $enlaces)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $enlaces = enlaces::find($id);
        $enlaces->idpagina = $request->idpagina;
        $enlaces->idrol = $request->idrol;
        $enlaces->descripcion = $request->descripcion;
        $enlaces->fechadecreacion = $request->fechadecreacion;
        $enlaces->fechamodificacion = $request->fechamodificacion;
        $enlaces->usuariocreacion = $request->usuariocreacion;
        $enlaces->usuariomodificacion = $request->usuariomodificacion;
        $enlaces->save();
        return 'enlaces actualizado';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $enlaces= enlaces::find($id);
        $enlaces->delete();
        return 'enlace eliminado';
    }
}
