<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Carousel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class CarouselController extends Controller
{public function index()
    {
        $carousels = Carousel::latest()->get(); 
        return Inertia::render('Admin/CarouselUpload', [
            'carousels' => $carousels,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'image'       => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $carousel = new Carousel();
        $carousel->title = $request->title;
        $carousel->description = $request->description;

        if ($request->hasFile('image')) {
            $carousel->image = $request->file('image')->store('images/carousel', 'public');
        }

        $carousel->save();
        
        return redirect()->route('carousel.index')->with('success', 'Carousel created successfully.');
    }

    public function destroy($id){
        $carousel = Carousel::findOrFail($id);

        if ($carousel->image){
            Storage::disk('public')->delete($carousel->image);
        }

        $carousel->delete();
        return redirect()->route('carousel.index')->with('success', 'Carousel deleted successfully.');
    }
    public function edit($id){
        $carousel = Carousel::findOrFail($id);
        $carousels = Carousel::latest()->get();
        return Inertia::render('Admin/CarouselUpload',[
            'carousels' => $carousels,
            'carousel' => $carousel
        ]);
    }
    public function update(Request $request , $id){
        $carousel = Carousel::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'description' => 'nullable|string',
            'image' => 'nullable|image',
        ]);


        if ($request->hasFile('image')) {
            
            if ($carousel->image && Storage::disk('public')->exists($carousel->image)) {
                Storage::disk('public')->delete($carousel->image);
            }
            $path = $request->file('image')->store('images/carousel', 'public');
            $carousel->image = $path;
        }
    
        $carousel->title = $request->title;
        $carousel->description = $request->description;
        $carousel->save();
    
        return redirect('/carousel');
    }
    
}
