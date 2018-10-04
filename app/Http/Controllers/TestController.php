<?php

namespace App\Http\Controllers;

use Auth;
use Session;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function info()
    {
        //$data = Auth::user()->name;
        $name = Session::get("activeuser")->name;
        return response(['data' => $name]);
    }
}
