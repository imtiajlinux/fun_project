<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Models\Carousel;
use App\Models\LatestNews;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\LatestNewsController;

Route::get('/', function () {
    $carousels = Carousel::latest()->get();
    $latestNews = LatestNews::latest()->get();
    return Inertia::render('Welcome', [
        'carousels' => $carousels,
        'latestNews' => $latestNews,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $carousels = Carousel::latest()->get();
    $latestNews = LatestNews::latest()->get();
    return Inertia::render('Dashboard',[
        'carousels' => $carousels,
        'latestNews' => $latestNews,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/carousel-data', [CarouselController::class, 'get']);

Route::middleware(['auth' , 'admin'])->group(function (){
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/carousel', [CarouselController::class, 'index'])->name('admin.carousel');
    Route::get('/admin/latest-news',[LatestNewsController::class, 'index'])->name('admin.latest-news');
    

    Route::get('/carousel', [CarouselController::class, 'index'])->name('carousel.index');
    Route::post('/carousel', [CarouselController::class, 'store']);
    Route::delete('/carousel/{id}',[CarouselController::class, 'destroy'])->name('carousel.destroy');
    Route::get('/carousel/{id}/edit', [CarouselController::class, 'edit']);
    Route::put('/carousel/{id}',[CarouselController::class, 'update']);


    Route::get('/news', [LatestNewsController::class, 'index'])->name('news.index');
    Route::post('/news', [LatestNewsController::class, 'store']);
    Route::delete('/news/{id}',[LatestNewsController::class, 'destroy'])->name('news.destroy');
    Route::get('/news/{id}/edit',[LatestNewsController::class, 'edit']);
    Route::put('/news/{id}',[LatestNewsController::class , 'update']);


});

require __DIR__.'/auth.php';
