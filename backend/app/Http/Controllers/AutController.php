<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class AutController extends Controller
{
    public function register(RegisterRequest  $request){
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }

    public function login(LoginRequest $request)
    {
        $credenciales= $request->only('email','password');
        if(!$token = JWTAuth::attempt($credenciales)){
            return response()->json(['error'=>'credencial invalida'],401);
        }
        $user = User::where('email',$request->email)->first();
        
        return response()->json(compact('user','token'),200);
    }
}
