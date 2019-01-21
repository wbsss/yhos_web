<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<html lang="zh-hans">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="description" content="DiskStation 提供功能完整的网络存储 (NAS) 解决方案，可让您轻松管理及备份数据，并在 Windows、Mac 及 Linux 计算机之间分享数据。">
    <title></title>
    <link href="/yhos/Public/css/index.css" type="text/css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/yhos/Public/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/yhos/Public/css/contextMenu.css"/>
    <script type="text/javascript" src="/yhos/Public/js/jquery/jquery-3.3.1.min.js"></script>

    <!--待添加css-->
    <style type="text/css"></style>
</head>
<body>

<div id="taskbar">
    <button id="menu_button">主菜单</button>
    <ul>
    </ul>
    <div id="user_bar"><p></p></div>
</div>
<div id="dropdown_box">
    <input value="搜索" class="app_search"/>
</div>
<div id="user_box">
    <p><?php echo ($username); ?></p>
    <span>个人设置</span>
    <span>重启</span>
    <span id="logout">注销</span>
    <span>关机</span>
    <span>关于</span>
</div>
<div class="little_box">
    <span>文件管理</span>
</div>

<div class="lodding" style="position:absolute;left:0px;top:0px;display: none;z-index: 1111;width: 100%;height: 100%;">
    <div class="" style="position:absolute;left:50%; top:50%;transform: translate(-50%, -50%);height: 100px;width: 200px;text-align: center;border: 2px solid #20c997;">
        <span style="line-height: 100px;color: red;font-weight: 400;font-size: 20px">正在加载中...</span>
    </div>
</div>
<div id='logout_yes' class="file_windows" style="z-index: 1111;display:none;width: 300px;height: auto;position:absolute;top:50%;transform: translate(-50%, -50%);left:50%;font-size: 14px">
    <div style="text-align: center;width:100%;background: #eee">确定注销吗</div>
    <div class="content_wrapper_foter">
        <span class="yes">确定</span>
        <span class="no">取消</span>
    </div>
</div>
    <!--&lt;!&ndash;删除用户&ndash;&gt;-->
    <!--<div class="delet_user bg_tips_box" style="position:absolute;left:0px;top:0px;display: block;z-index: 1111;width: 100%;height: 100%;">-->
        <!--<div class="tips_box file_windows" style="width: 30%;height: auto;">-->
            <!--<div class="content_wrapper">-->
               <!--<form>-->
                       <!--<h6 style="text-align: center;padding: 20px 0">是否要删除用户<span>root</span>？</h6>-->
                   <!--</form>-->
            <!--</div>-->
            <!--<div class="content_wrapper_foter">-->
               <!--<span class='yes' style="background: #ffc107;border: none;">删除</span>-->
               <!--<span class='no'>取消</span>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <div class="item-toggle-img">
        <img src="/yhos/Public/images/jstree_open.png" border="1" />
    </div>
<script type="text/javascript">
    window.onload = function () {
        // //设置不可点反射
        // $('.bg_tips_box').off('click').on('click',function (e) {
        //     console.log("aaaaa");
        //     setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 0);
        //     setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 100);
        //     setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 200);
        //     setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 300);
        //     e.stopPropagation()
        // });
        // $('.set_ftp_service1').off('click').on('click',function (e) {
        //     alert("NNN");
        //     e.stopPropagation()
        // });
        // // var url = "http://192.168.1.111:8000/yhos/index.php/Home/glaive/test";
        // var url = "http://192.168.1.111:4000/test";
        // console.log(url);
        // $.get(url,function(data){
        //     console.log(data)
        // }).fail(function(error) {
        //     console.log('errer');
        //     alert("连接服务器失败");
        // });
        $("#logout").on("click",function (e) {
            $("#logout_yes").show(300);
            $("#logout_yes .yes").off('click').on("click",function (e) {
                window.location.href = "/yhos/index.php/Home/index/logout";
            })
            $("#logout_yes .no").off('click').on("click",function (e) {
                $("#logout_yes").hide(300);
            })
        })
    }
</script>


<script type="text/javascript" src="/yhos/Public/js/public/createApplication.js"></script>
<script type="text/javascript" src="/yhos/Public/js/index.js"></script>
<!--<script type="text/javascript" src="/yhos/Public/js/public/drag.js"></script>-->
<script type="text/javascript" src="/yhos/Public/js/public/drag1.js"></script>
<script type="text/javascript" src="/yhos/Public/js/public/boxZoom.js"></script>
<script type="text/javascript" src="/yhos/Public/js/public/boxMove.js"></script>
<script type="text/javascript" src="/yhos/Public/js/public/html2canvas.min.js"></script>
<script type="text/javascript" src="/yhos/Public/js/public/public.js"></script>
<script type="text/javascript" src="/yhos/Public/js/public/contextMenu.js"></script>

</body>
</html>