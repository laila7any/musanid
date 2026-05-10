<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Request extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'student_id',
        'request_type',
        'title',
        'description',
        'details',
        'priority',
        'status',
        'needed_by',
        'additional_info',
    ];

    protected $casts = [
        'additional_info' => 'array',
        'needed_by' => 'date'
    ];

    public function student()
    {
         return $this->belongsTo(User::class, 'student_id');
    }

public function departments()
{
    return $this->hasMany(RequestDepartment::class);
}

// Optionally, to access departments directly through pivot:
public function assignedDepartments()
{
    return $this->belongsToMany(Department::class, 'request_departments')
                ->withPivot('status', 'comments', 'reviewed_by', 'reviewed_at')
                ->withTimestamps();
}

    public function getOverallStatusAttribute()
    {
        $approvals = $this->departments;
        
        if ($approvals->where('status', 'rejected')->count() > 0) {
            return 'rejected';
        }
        
        if ($approvals->where('status', 'pending')->count() > 0) {
            return 'in_review';
        }
        
        if ($approvals->where('status', 'approved')->count() === $approvals->count()) {
            return 'approved';
        }
        
        return 'in_review';
    }
}