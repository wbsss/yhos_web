<?php
namespace Home\Controller;
use Think\Controller;
class GlaiveController extends Controller {
    public function test(){
        $url = 'http://192.168.1.111:4000/test';
        $res = doGet($url);
        header("Access-Control-Allow-Origin: *");
        header("Content-type: text/html; charset=utf-8");
        echo $res;
    }
}