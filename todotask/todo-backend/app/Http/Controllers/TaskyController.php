<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Taskies;
class TaskyController extends Controller
{
    public $timestamps=false;
    function addTask(Request $req){

        $data = new Taskies;
        $data->description=$req->input('description');
        $data->title = $req->input('title');
        $data->status = $req->input('status');
        $data->priority =$req->input('priority');
        $data->save();
        return $data;
    }

    function list(){
        return Taskies::all();
    }

    function delete($id){
    
        $delete =Taskies::where('id',$id)->delete();
        if($delete){
            return "Has been deleted";
        }else{
            return "id not found";
        }
    }

    function getTask($id){
        return Taskies::find($id);
    }

    function editTask($id,Request $req){

        $data = Taskies::find($id);
        $data->description=$req->input('description');
        $data->title = $req->input('title');
        $data->status = $req->input('status');
        $data->priority =$req->input('priority');
        $data->save();
        return $data;
    }

    function search($key){
        return Taskies::where('title','Like',"%$key%")->get();
    }
}
