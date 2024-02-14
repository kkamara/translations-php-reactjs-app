<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateTranslations;
use App\Http\Requests\GetTranslations;

class TranslationsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:sanctum')
            ->only(['create', 'get']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateTranslations $request)
    {
        if (!$request->validated()) {
            return response()->json([
                'message' => 'Valid languages are en, es.',
            ], Response::HTTP_BAD_REQUEST);
        }

        return response()->json([
            'message' => 'Success',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function get(GetTranslations $request)
    {
        $locale = $request->input("lang");
        dd($locale);
    }
}
