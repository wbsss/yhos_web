<?php
error_reporting(E_ALL);
set_time_limit(0);

$port = 1935;
$ip = "192.168.1.166";

/*
 +-------------------------------
 *    @socket连接整个过程
 +-------------------------------
 *    @socket_create
 *    @socket_connect
 *    @socket_write
 *    @socket_read
 *    @socket_close
 +--------------------------------
 */

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket < 0) {
    echo "socket_create() failed: reason: " . socket_strerror($socket) . "\n";
}else {
//    echo "OK.\n";
}

//echo "试图连接 '$ip' 端口 '$port'...\n";
$result = socket_connect($socket, $ip, $port);
if ($result < 0) {
    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror($result) . "\n";
}else {
//    echo "连接OK\n";
}
// echo "请输入要发送的内容:";

#get file station of path
# $in =  '{"method":1}'.'{"path":"/home"}';


#$packetHead = "\x01\x02\x03\x04"."\x05\x06\x07\x08";
#$in =  '{{"method":1,"key":4},{"status":0,"path":"/home","file_name":"test","size_M":20}}';


# 1 method:1 key:1 GET_KEY_DISK_INFO ok
#$in =  '{"method_key":{"method":1,"key":1}}';

#5 method:1 key:5 GET_BLK_DEV_INFO ok
//$in =  '{"method_key":{"method":1,"key":2}}';

# 2 method:1 key:2
$in =  '{"method_key":{"method":1,"key":2}}';


# 3 method:1 key:3 CREATE_SHARE_FILE_DIRECTORY

//$in =  '{"method_key":{"method":1,"key":3},"parameter_path":{"status":0,"path":"/home","file_name":"test5","size_M":20}}';



# 4 method:1 key:4 GET_DIRECTORY_FILES ok
#$in =  '{"method_key":{"method":1,"key":4},"parameter_dir":{"dir_path":"/home"}}';

#var_dump(json_decode($in, true));





//$in =  '{"method":1,"key":3,"status":0,"path":"/home","file_name":"test","size_M":20}';



#$in = fgets ( STDIN );

# 1 GET_KEY_DISK_INFO
#$method_get = "\x01\x00\x00\x01";

#echo "method_get".$method_get."\n";
#$key_disk = "\x02\x00\x00\x01";
#echo "key_disk".$key_disk."\n";


#$in =  $method_get.$key_disk ;
//echo $in;

$out = '';

if(!socket_write($socket, $in, strlen($in))) {
    echo "socket_write() failed: reason: " . socket_strerror($socket) . "\n";
}else {
//    echo "发送到服务器信息成功！\n";
//    echo "发送的内容为:".$in;
}

while($out = socket_read($socket, 8192)) {
//    echo "接收服务器回传信息成功！\n";
    header("Content-type: text/html; charset=utf-8");
    echo ($out) ;
}

socket_close($socket);

//echo "socket关闭OK\n";
?>
