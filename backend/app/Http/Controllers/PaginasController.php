<?php

namespace App\Http\Controllers;

use App\Models\paginas;
use Illuminate\Http\Request;

class PaginasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return paginas::all();
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
        $paginas= new paginas();
        $paginas->fechadecreacion = $request->fechadecpaginas;
        $paginas->fechamodificacion = $request->fechamodificacion;
        $paginas->usuariocreacion = $request->usuariocreacion;
        $paginas->url = $request->url;
        $paginas->estado = $request->estado;
        $paginas->nombre = $request->nombre;
        $paginas->descripcion = $request->descripcion;
        $paginas->icono = $request->icono;
        $paginas->tipo = $request->tipo;
        $paginas->save();
        return 'pagina guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(paginas $paginas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(paginas $paginas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $paginas= paginas::find($id);
        $paginas->fechadecreacion = $request->fechadecpaginas;
        $paginas->fechamodificacion = $request->fechamodificacion;
        $paginas->usuariocreacion = $request->usuariocreacion;
        $paginas->url = $request->url;
        $paginas->estado = $request->estado;
        $paginas->nombre = $request->nombre;
        $paginas->descripcion = $request->descripcion;
        $paginas->icono = $request->icono;
        $paginas->tipo = $request->tipo;
        $paginas->save();
        return 'pagina actualizada';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $paginas= paginas::find($id);
        $paginas->delete();
        return 'pagina eliminada';
    }
    
}
