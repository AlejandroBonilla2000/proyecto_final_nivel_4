<?php

namespace App\Http\Controllers;

use App\Models\usuarios;
use Database\Factories\UsuariosFactory;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return usuarios::all();
    }


    public function create()
    {
       
    }

    
    public function store(Request $request)
    {
        $usuarios= new usuarios();
        $usuarios->idpersona = $request->idpersona;
        $usuarios->usuario = $request->usuario;
        $usuarios->clave = $request->clave;
        $usuarios->habilitado = $request->habilitado;
        $usuarios->fecha = $request->fecha;
        $usuarios->idrol = $request->idrol;
        $usuarios->fechadecreacion = $request->fechadecreacion;
        $usuarios->fechamodificacion = $request->fechamodificacion;
        $usuarios->usuariocreacion = $request->usuariocreacion;
        $usuarios->ususariomodificacion = $request->ususariomodificacion;
        $usuarios->save();
        return 'usuario guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(usuarios $usuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $usuarios=  usuarios::find($id);
        $usuarios->idpersona = $request->idpersona;
        $usuarios->usuario = $request->usuario;
        $usuarios->clave = $request->clave;
        $usuarios->habilitado = $request->habilitado;
        $usuarios->fecha = $request->fecha;
        $usuarios->idrol = $request->idrol;
        $usuarios->fechadecreacion = $request->fechadecreacion;
        $usuarios->fechamodificacion = $request->fechamodificacion;
        $usuarios->usuariocreacion = $request->usuariocreacion;
        $usuarios->ususariomodificacion = $request->ususariomodificacion;
        $usuarios->save();
        return 'usuario actualizado';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuarios = usuarios::find($id);
        $usuarios->delete();
        return 'usuario eliminado';
    }
}
