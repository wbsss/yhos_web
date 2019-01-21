<?php

//错误代码定义
define("ERRNO_SUCCESS", 0);
define("ERRNO_ARGUMENTS_ERROR", -1);
define("ERRNO_USER_ERROR", -2);
define("ERRNO_PRIVILEGE_ERROR", -3);
define("ERRNO_DEVICE_PRIVILEGE_ERROR", -4);
define("ERRNO_APP_ERROR", -5);
define("ERRNO_DEVICE_ERROR", -6);
define("ERRNO_LOCATION_ERROR", -7);
define("ERRNO_REGISTER_ERROR", -8);
define("ERRNO_AUTHORIZATION_REQUIRE", -9);
define("ERRNO_AUTHORIZATION_MASTER", -10);
define("ERRNO_OFFLINE", -11);
define("ERRNO_NOT_IMPLEMENTED", -12);
define("ERRNO_WAITING_REVIEW", -14);
define("ERRNO_VERIFY_CODE_ERROR", -15);
define("ERRNO_FAIL", -99);
define("DEVICE_ALREADY_BOND ", 1);

//接口返回信息
function response($code, $msg, $data = null) {
    if (is_array($data)) {
        echo "{\"errcode\":$code,\"errmsg\":\"$msg\",\"data\":[" . join(',', $data) . "]}";
    } else {
        if ($data) {
            echo "{\"errcode\":$code,\"errmsg\":\"$msg\",\"data\":$data}";
        } else {
            echo "{\"errcode\":$code,\"errmsg\":\"$msg\"}";
        }
    }
    exit();
}

//传参数
function get_param($name, $default=null) {
    if ($default === null) {
        if (isset($_POST[$name]))
            return $_POST[$name];
        if (isset($_GET[$name]))
            return $_GET[$name];
    }
    if (isset($_POST[$name]) && $_POST[$name] != '')
        return $_POST[$name];
    if (isset($_GET[$name]) && $_GET[$name] != '')
        return $_GET[$name];
    return $default;
}


//数据传输
function build_http($url, $data = '', $method = 'POST', $wait=0) {
    $curl = curl_init(); // 启动一个CURL会话
    curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
    curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
    $data = array();
    if ($method == 'POST') {
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        if ($data != '') {
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
        }
    }
    if( $wait == 0 ){
    	$wait = 5;
    }
    curl_setopt($curl, CURLOPT_TIMEOUT, $wait); // 设置超时限制防止死循环
    curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
    $tmpInfo = curl_exec($curl); // 执行操作
    curl_close($curl); // 关闭CURL会话
    return $tmpInfo; // 返回数据
}

function doGet($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

//数组转json
function arrayToObject($arr) {
    if (is_array($arr)) {
        return (object) array_map(__FUNCTION__, $arr);
    } else {
        return $arr;
    }
}
?>
