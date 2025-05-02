<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class latestNews extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
    ];
}
