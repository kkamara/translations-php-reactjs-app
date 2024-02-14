<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateTranslations;
use Illuminate\Support\Facades\App;

class TranslationsController extends Controller
{
    public function __construct() {
        $this->middleware('auth:sanctum')
            ->only(['get']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateTranslations $request)
    {
        if ($request->fails()) {
            return response()->json([
                'message' => 'Valid languages are en, es.',
            ], Response::HTTP_BAD_REQUEST);
        }

        $request->session()->put("lang", $request->input("lang"));
        App::setLocale($request->input("lang"));

        return response()->json([
            'message' => 'Success',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function get(Request $request)
    {
        // $lang = $request->session()->get("lang");
        $locale = App::currentLocale();
        dd($locale);
    }
}
