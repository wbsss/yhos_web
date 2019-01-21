<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function _initialize(){
//
//        $id = session("uid");
//        if(!isset($id)){
//            $this->error("没有登录");
//        }else{
//            print $id;
//        }
    }
    public function test(){
        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }
    public function login(){
        $username = get_param('username');
        $password = get_param('password');
        if($username == null || $password == null){
            $this->display('login');die;
        }
        $url = 'http://192.168.1.111:4000/login/'.$username.'/'.$password;
        $res = doGet($url);
        $de_json = json_decode($res,true)["errcode"] ;
        if($de_json === 0){
            session("uid",$username);
            $this->assign("username",$username);
            $this->redirect('index/index',null,0);
        }
        $this->assign("msg","用户名或密码错误!");
        $this->display('login');
    }
    public function logout(){
        session("uid",null);
        $this->redirect('index/login',null,0);
    }
    public function index(){
        $id = session("uid");
        if(!isset($id)){
//            $this->error("ok",'index.php/Home/index/login',1);
            $this->redirect('index/login',null,0);
        }
        $this->assign("username",$id);
        $this->display();
    }

}