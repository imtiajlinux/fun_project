<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LatestNews;
use Illuminate\Contracts\Cache\Store;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class LatestNewsController extends Controller
{
    public function index(){
        $latestnews = LatestNews::latest()->get();
        return Inertia::render('Admin/LatestNewsUpload', [
            'latestnews' => $latestnews,
        ]);
    }
    public function store(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        $latestNews = new LatestNews();
        $latestNews->title = $request->title;
        $latestNews->description = $request->description;
        if ($request->hasFile('image')) {
            $latestNews->image = $request->file('image')->store('images/news', 'public');
        }


        $latestNews->save();
        return redirect()->route('news.index')->with('success', 'Latest News created successfully.');
    }

    public function destroy($id){
        $latestNews = LatestNews::findOrFail($id);

        if ($latestNews->image){
            Storage::disk('public')->delete($latestNews->image);
        }

        $latestNews->delete();
        return redirect()->route('news.index')->with('success', 'Latest News deleted successfully.');
    }

    public function edit($id){
        $news = LatestNews::findOrFail($id);
        $latestNews = LatestNews::latest()->get();
        return Inertia::render('Admin/LatestNewsUpload',[
            'latestnews' => $latestNews,
            'news' => $news
        ]);
    }

    public function update(Request $request , $id){
        $latestNews = LatestNews::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'description' => 'nullable|string',
            'image' => 'nullable|image',
        ]);

    if ($request->hasFile('image')) {
        if ($latestNews->image && Storage::disk('public')->exists($latestNews->image)) {
            Storage::disk('public')->delete($latestNews->image);
        }
        $path = $request->file('image')->store('images/news', 'public');
        $latestNews->image = $path;

    }

        $latestNews->title = $request->title;
        $latestNews->description = $request->description;
        $latestNews->save();
        return redirect()->route('news.index')->with('success', 'Latest News updated successfully.');
    }   
}
