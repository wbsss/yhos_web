var randomNumbe=RandomNumBoth(1000,9999);
tname.push("远程访问");
timg.push("ipfs.png");
tid.push(randomNumbe);
createApp(function () {
    app_open(randomNumbe,1,function (lastbox_item,box_item) {
        var $L =ipfs.content;
        $(".file_windows"+box_item).append($L);
        //注册
        $(".file_windows"+box_item+" .register-success").bind('click',function () {
            var username =$(".file_windows"+box_item+" #rusername").val();
            var password =$(".file_windows"+box_item+" #rpassword").val();
            var id ='1';
            $.post('http://192.168.1.111:8000/yhos/index.php/home/index/ipfs', {},
                function(data,status) {
                    console.log(data);
                    var obj = eval('(' + data + ')');
                    if(obj['ID']){
                        id = obj['ID'];
                        console.log(id);
                        $.post('http://118.31.244.98:81/ipfs/public/index.php/index/index/regist',
                            {
                                username:username,
                                password:password,
                                id:id,
                            },
                            function(data,status) {
                                console.log(data);
                                var obj = eval('(' + data + ')');
                                if(obj['code'] == 0){
                                    alert('注册成功！');
                                    $(".file_windows"+box_item+" .container").css("display","none");
                                    $(".file_windows"+box_item+" .user_login").css("display","block");
                                }else {
                                    alert(obj['msg']);
                                }
                            }
                        );
                    }
                }
            );
        });
    });
});