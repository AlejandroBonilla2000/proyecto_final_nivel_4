<?php

namespace App\Http\Controllers;

use App\Models\roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return roles::all();
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
        $roles= new roles();
        $roles->rol = $request->rol;
        $roles->fechacreacion = $request->fechacreacion;
        $roles->fechamodificacion = $request->fechamodificacion;
        $roles->usuariocreacion = $request->usuariocreacion;
        $roles->usuariomodificacion = $request->usuariomodificacion;
        $roles->save();
        return 'rol guardado';
    }

    /**
     * Display the specified resource.
     */
    public function show(roles $roles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(roles $roles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $roles=  roles::find($id);
        $roles->rol = $request->rol;
        $roles->fechacreacion = $request->fechacreacion;
        $roles->fechamodificacion = $request->fechamodificacion;
        $roles->usuariocreacion = $request->usuariocreacion;
        $roles->usuariomodificacion = $request->usuariomodificacion;
        $roles->save();
        return 'rol actuaslizado';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $roles = roles::find($id);
        $roles->delete();
        return'rol eliminado';
    }
}
