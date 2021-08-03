<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taskies extends Model
{
    public $timestamps=false;

    protected $fillable = [
        'title', 'description','status','priority'
    ];
    use HasFactory;
}
