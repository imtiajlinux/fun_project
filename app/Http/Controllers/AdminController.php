<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function create()
    {
        // return view('admin.create');
    }

    public function store(Request $request)
    {
        // Handle the request to store a new admin
    }

    public function edit($id)
    {
        // return view('admin.edit', compact('id'));
    }

    public function update(Request $request, $id)
    {
        // Handle the request to update an admin
    }

    public function destroy($id)
    {
        // Handle the request to delete an admin
    }
}
