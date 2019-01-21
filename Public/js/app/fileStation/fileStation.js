(function () {
    //事件
    function LoadData(item) {
        //多级列表
        $(".file_windows"+item+" .file_bar .flex_bar_img").unbind("click");
        $(".file_windows"+item+" .file_bar .flex_bar_text").unbind("click");
        /*设置第一个flex_bar_img*/
        $(".file_windows"+item+" .file_bar .flex_bar_img:eq(0)").css("background-position","0 5px");
        $(".file_windows"+item+" .file_bar .flex_bar_img:eq(0)").bind("click", function (e) {
            if($(this).parent().siblings("ul").css("display") != "block") {
                $(this).css("background-position","0 5px");
                $(this).parent().siblings("ul").css("display", "block");
            }else {

                $(this).css("background-position","0 -163px");
                $(this).parent().siblings("ul").css("display", "none");
            }
        });
        /*点击下拉不是第一个flex_bar_img*/

        $(".file_windows"+item+" .file_bar .flex_bar_img").not(":eq(0)").bind("click", function (e) {
            // console.log($(this).length);
            var his=this;
            var his2=this;
            var path=$(his).siblings("span").attr('path');
            var str='';
            if($(this).parent().siblings("ul").css("display") != "block") {
                $(this).parent().siblings("ul").css("display", "block");
                $.get('http://192.168.1.111:4000/get_file_foder//volume2/'+path,
                    {
                    },
                    function(data,status) {
                        var obj = eval('(' + data + ')');
                        console.log(obj['data'][0]['foders'])
                        var $P=Array();
                        $P[0]="";$P[1]="";$P[2]="";$P[3]="";
                        if( obj['data'][0]['foders'] != '') {
                            $(his).css("background-position","0 5px");
                            obj['data'][0]['foders'].forEach(function (value,key) {
                                var $S = "                     <ul>\n" +
                                    "                             <li>\n" +
                                    "                                  <div>\n" +
                                    "                                      <div class=\"flex_bar_text\"><span class='flex_bar_img'></span><span fd='"+value.foder_name+"' path='"+obj['data'][0]['path']+value.foder_name+"'>" + value.foder_name + "</span></div>\n" +
                                    "                                  </div>\n" +
                                    "                             </li>\n" +
                                    "                        </div>\n";
                                $(his).parent().parent().append($S);
                            });
                        }else {
                            $(his).css("background","none");
                        }
                        LoadData(item);
                        //修改样式
                        // console.log($(his).parent().siblings("ul").children().children().children(".flex_bar_text").children("span"))
                        // console.log($(his).parent().siblings("ul").children().children().children(".flex_bar_text").children("span:last-child").css("padding-left",parseInt($(his).parent().parent().parent().parent().siblings("div").children("span:last-child").css("padding-left"))+20+"px"));
                        // console.log();
                        }
                );
            }else {
                $(this).css("background-position","0 -163px");
                $(this).parent().siblings("ul").remove();
            }
            e.stopPropagation();
        });

        //右键弹出框$(".file_windows"+item+" ").find(".").find(".").
        // $(".file_windows"+item+" .file_bar .flex_bar_text>span:last-child").contextMenu({
        //     width: 110, // width
        //     itemHeight: 30, // 菜单项height
        //     bgColor: "#aaa", // 背景颜色
        //     color: "#fff", // 字体颜色
        //     fontSize: 12, // 字体大小
        //     hoverBgColor: "#bbb", // hover背景颜色
        //     target: function(ele) { // 当前元素
        //         console.log(ele) ;
        //     },
        //     menu: [
        //         {
        //             // 菜单项
        //             text: "新建文件夹",
        //             icon: "./images/add.png",
        //             callback: function(ele) {
        //                 var filename = ele.text()+"/";
        //                 var path=ele.attr('path');
        //                 var str='';
        //                 for(var i=0;i<10;i++){
        //                     if($(ele).parent().parent().parent().parent().siblings("div").children("span:last-child").text()=='yunhui'){
        //                         ele =$(ele).parent().parent().parent().parent().siblings("div").children("span:last-child")[0];
        //                         break;
        //                     }
        //                     str += ($(ele).parent().parent().parent().parent().siblings("div").children("span:last-child").text())+"/";
        //                     ele =$(ele).parent().parent().parent().parent().siblings("div").children("span:last-child")[0];
        //                 }
        //                 path +=str;
        //                 $(".file_windows"+item+" #add_foter div>span:eq(1)").text(path+filename);
        //                 $(".file_windows"+item+" #add_foter").slideDown();
        //             }
        //         },
        //         {
        //             text: "删除",
        //             icon: "./images/del.png",
        //             callback: function(ele) {
        //                 var filename = ele.text();
        //                 var path=ele.attr('path');
        //                 var fd=ele.attr('fd'),title;
        //                 var status=ele.attr('status');
        //                 fd !=null?(fd=='d'?title='删除文件夹':title='删除文件'):title='删除共享文件夹';
        //                 var str='';
        //                 for(var i=0;i<1;i++){
        //                     if($(ele).parent().parent().parent().parent().siblings("div").children("span:last-child").text()=='yunhui'){
        //                         ele =$(ele).parent().parent().parent().parent().siblings("div").children("span:last-child")[0];
        //                         break;
        //                     }
        //                     str = ($(ele).parent().parent().parent().parent().siblings("div").children("span:last-child").text())+"/"+str;
        //                     ele =$(ele).parent().parent().parent().parent().siblings("div").children("span:last-child")[0];
        //                 }
        //                 path +=str;
        //                 console.log(path);
        //                 console.log(str);
        //                 if( status == 'active'){
        //                     $(".file_windows"+item+" #delete_foter div>span:eq(1)").text(path);
        //                     $(".file_windows"+item+" #delete_foter div>span:eq(3)").text(filename);
        //                     $(".file_windows"+item+" #delete_foter div:eq(0)").text(title);
        //                     $(".file_windows"+item+" #delete_foter").slideDown();
        //                 }else {
        //                     alert("请选中要删除的项目");
        //                 }
        //
        //             }
        //         },
        //         {
        //             text: "复制文件",
        //             icon: "./images/copy.png",
        //             callback: function() {
        //                 $(".file_windows"+item+" #copy_foter").slideDown();
        //             }
        //         },
        //         {
        //             text: "移动文件",
        //             icon: "./images/paste.png",
        //             callback: function() {
        //                 $(".file_windows"+item+" #move_foter").slideDown();
        //             }
        //         }
        //     ]
        //
        // });
        //加载数据到右侧
        $(".file_windows"+item+" .file_bar .flex_bar_text>span:last-child").bind("click", function (e) {
            console.log('right');
            var str='',his2=this,his=this;
            var path=$(his).attr('path');
            //修改背景并记录用户选中
            $(".file_windows"+item+" .file_bar .flex_bar_text>span:last-child").css("background","none");
            $(".file_windows"+item+" .file_bar .flex_bar_text>span:last-child").removeAttr("status");
            $(this).css("background","#ccc");
            $(this).attr("status","active");
            // $(".file_windows"+item+" .file_bar li").not(this).css("background","rgb(221,228,235)");
            // console.log($(this).text());
            $.get('http://192.168.1.111:4000/get_file_foder//volume2/'+path,
                {
                },
                function(data,status) {
                    var obj = eval('(' + data + ')');
                    console.log(obj)
                    var $P=Array();
                    $P[0]="";$P[1]="";$P[2]="";$P[3]="";
                    if( obj['data'][0]['foders'] != '') {
                        obj['data'][0]['foders'].forEach(function (value,key) {
                            $P[0]+="<div name=\"home"+str+"/"+$(his).text()+"\" class=\"item\">"+value.foder_name+"</div>\n";
                            $P[1]+="<div class=\"item\">"+value.size+" Bytes</div>\n";
                            $P[2]+="<div class=\"item\">"+value.permission+"</div>\n";
                            $P[3]+="<div class=\"item\">"+value.data_day+" "+value.data_time+"</div>\n";
                        })
                    }
                    $(".file_windows"+item+" .file_content_td:eq(0)").children("div").not(':first').remove();
                    $(".file_windows"+item+" .file_content_td:eq(1)").children("div").not(':first').remove();
                    $(".file_windows"+item+" .file_content_td:eq(2)").children("div").not(':first').remove();
                    $(".file_windows"+item+" .file_content_td:eq(3)").children("div").not(':first').remove();
                    $(".file_windows"+item+" .file_content_td:eq(0)").append($P[0]);
                    $(".file_windows"+item+" .file_content_td:eq(1)").append($P[1]);
                    $(".file_windows"+item+" .file_content_td:eq(2)").append($P[2]);
                    $(".file_windows"+item+" .file_content_td:eq(3)").append($P[3]);
                    moveout(item);
                    
                });
            e.stopPropagation();
        });
    }
    function box_in_event(item) {
        //新增
        $(".file_windows"+item+" #add_foter .content_wrapper_foter>span:eq(0)").click(function () {
            console.log("新增");
            var folder = $(this).parent().siblings("div").children("span:eq(1)").text();
            var folderName = $(this).parent().siblings("div").children("input:eq(0)").val();
            if($(this).parent().siblings("div").children("input").val()){
                $.post('http://'+data.host+':'+data.port+"/yhos/index.php/Home/Index/create_file_directory",
                    {
                        folder:folder,
                        folderName:folderName,
                    },
                    function(data,status) {
                        console.log(data);
                        var obj = eval('(' + data + ')');
                        var $P = Array();
                        if(obj["return_error_info"] == "Success."){
                            alert("创建成功！")
                        }else {
                            alert("创建创建失败！")
                        }
                    });
            }else {
                alert("文件名不能为空");
            }
        });
        $(".file_windows"+item+" #add_foter .content_wrapper_foter>span:eq(1)").click(function () {
            $(".file_windows"+item+" #add_foter").slideUp();
        });
        //删除
        $(".file_windows"+item+" #delete_foter .content_wrapper_foter>span:eq(0)").click(function () {
            console.log('删除');
            switch ($(this).parent().parent('div').find(':eq(0)').text()) {
                case '删除文件':
                    var dir_or_file = 'file';
                    break;
                case '删除文件夹':
                    var dir_or_file = 'directory';
                    break;
                case '删除共享文件夹':
                    var dir_or_file = 'directory';
                    break;
            }
            var path = $(this).parent().parent('div').find('span:eq(1)').text();
            var file_name = $(this).parent().parent('div').find('span:eq(3)').text();
            $.post('http://'+data.host+':'+data.port+"/yhos/index.php/Home/Index/mod_del_file",
                {
                    path:path,
                    file_name:file_name,
                    dir_or_file:dir_or_file,
                },
                function(data,status) {
                    var obj = eval('(' + data + ')');
                    if(obj["return_error_info"] == "Success."){
                        alert("删除成功");
                        $(".file_windows"+item+" .delete_foter").slideUp(500);
                    }else {
                        alert("删除失败"+obj["return_error_info"]);
                    }
                });

        });
        $(".file_windows"+item+" #delete_foter .content_wrapper_foter>span:eq(1)").click(function () {
            $(".file_windows"+item+" #delete_foter").slideUp();
        });
        //复制
        $(".file_windows"+item+" #copy_foter .content_wrapper_foter>span:eq(0)").click(function () {
            var src_path = $(this).parent().siblings("div").children("input:eq(1)").val();
            var dest_path = $(this).parent().siblings("div").children("input:eq(2)").val();
            var file_name = $(this).parent().siblings("div").children("input:eq(0)").val();
            if(src_path && dest_path && file_name){
                $.post('http://'+data.host+':'+data.port+"/yhos/index.php/Home/Index/mod_copy_file",
                    {
                        src_path:"/mnt/md1p1/"+src_path+"/",
                        dest_path:"/mnt/md1p1/"+dest_path+"/",
                        file_name:file_name,
                    },
                    function(data,status) {
                        var obj = eval('(' + data + ')');
                        if(obj["return_error_info"] == "Success."){
                            alert(obj["return_error_info"]);
                        }else {
                            alert(obj["return_error_info"]);
                        }
                    }
                );
            }else {
                alert("文件名或路径不能为空");
            }
        });
        $(".file_windows"+item+" #copy_foter .content_wrapper_foter>span:eq(1)").click(function () {
            $(".file_windows"+item+" #copy_foter").slideUp();
        });
        //移动
        $(".file_windows"+item+" #move_foter .content_wrapper_foter>span:eq(0)").click(function () {
            var src_path = $(this).parent().siblings("div").children("input:eq(1)").val();
            var dest_path = $(this).parent().siblings("div").children("input:eq(2)").val();
            var file_name = $(this).parent().siblings("div").children("input:eq(0)").val();
            if(src_path && dest_path && file_name){
                $.post('http://'+data.host+':'+data.port+"/yhos/index.php/Home/Index/mod_move_file",
                    {
                        src_path:"/mnt/md1p1/"+src_path+"/",
                        dest_path:"/mnt/md1p1/"+dest_path+"/",
                        file_name:file_name,
                    },
                    function(data,status) {
                        var obj = eval('(' + data + ')');
                        if(obj["return_error_info"] == "Success."){
                            alert(obj["return_error_info"]);
                        }else {
                            alert(obj["return_error_info"]);
                        }
                    }
                );
            }else {
                alert("文件名或路径不能为空");
            }
        });
        $(".file_windows"+item+" #move_foter .content_wrapper_foter>span:eq(1)").click(function () {
            $(".file_windows"+item+" #move_foter").slideUp();
        });

        //分割线
        $(".file_windows"+item+" .file_partition_1").bind("mousedown", function (e) {
            var x = e.pageX;
            var width = parseInt($(".file_windows"+item+" .file_bar").width());
            $("html").css("cursor","w-resize");
            $(document).mousemove(function (e) {
                var x1 = e.pageX;
                var new_width = width + x1 - x;
                // new_width<box_width-150?null:new_width=box_width-150;
                new_width > 50 ? null : new_width = 50;
                $(".file_windows"+item+" .file_bar").css("width", new_width + "px");

                // $(".file_content").css("width",box_width-new_width+"px");
            });
            $(document).bind("mouseup", function (e) {
                $(this).unbind();
                $("html").css("cursor","default");
            });
        });
        //分割线
        $(".file_windows"+item+" .file_content>.file_partition").bind("mousedown", function (e) {
            // alert($(this));
            var x = e.pageX;
            var width = parseInt($(this).prev().width());
            var a = this;
            var box_width = parseInt($(".file_content").width());
            //点击时背景变色
            var index = $(".file_windows"+item+" .file_content>.file_partition").index(this);
            $(".file_windows"+item+" .file_content_td:eq(" + index + ")>.item:eq(0)").css("background", "#eee");

            //取消移入事件
            $(".file_windows"+item+" .file_content_td>.item").unbind("mouseenter");
            $(document).mousemove(function (e) {
                var x1 = e.pageX;
                var new_width = width + x1 - x;
                // $(".wbs").width()<50?new_width=width:null;
                // new_width<box_width-150?null:new_width=box_width-150;
                // new_width>50?null:new_width=50;
                $(a).prev().css("width", new_width + "px");
            });
            $(document).bind("mouseup", function (e) {
                console.log("mouseup");
                $(".file_windows"+item+" .file_content .file_content_td:eq(" + index + ")>.item:eq(0)").css("background", "white");
                moveout(item);
                $(this).unbind();
            });

        });
    }

    function moveout(item) {
        //移入
        $(".file_windows"+item+" .file_content_td>.item").bind("mouseenter", function (e) {
            var index=$(this).index();
            if (index>0){
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item:eq("+$(this).index()+")").not(".active").css("background","#eee");
            }else {
                $(this).not(".active").css("background","#eee");
            }
        });
        //移出
        $(".file_windows"+item+" .file_content_td>.item").bind("mouseleave", function (e) {
            var index=$(this).index();
            if (index>0){
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item:eq("+$(this).index()+")").not(".active").css("background","none");
            }else {
                $(this).not(".active").css("background","none");
            }
        });
        //点击选中
        $(".file_windows"+item+" .file_content_td>.item").bind("click", function (e) {
            var index=$(this).index();
            if (index>0){
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item").removeClass("active");
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item").css("background","none");
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item:eq("+$(this).index()+")").css("background","#ccc");
                $(".file_windows"+item+" .file_content").find(".file_content_td").find(".item:eq("+$(this).index()+")").addClass("active");
            }
        });
    }
    var randomNumbe=RandomNumBoth(1000,9999);
    tname.push("文件管理");
    timg.push("folder.png");
    tid.push(randomNumbe);
    createApp(function () {
        //创建窗口
        app_open(randomNumbe, 0, function (lastbox_item, box_item) {
            var $L ="<div class=\"win_navigation_bar\">\n" +
                                "        <div class=\"win_navbar_search\">\n" +
                                "            <div class=\"win_search_btn navbar_btn_last\" ></div>\n" +
                                "            <div class=\"win_search_btn navbar_btn_next\" ></div>\n" +
                                "            <div class=\"win_search_btn navbar_btn_update\"></div>\n" +
                                "            <span>快速访问</span>\n" +
                                "            <input class=\"navbar_input_path\" name=\"path\" value=\"\" type=\"text\"/>\n" +
                                "            <span class=\"span_search\">搜索</span>\n" +
                                "            <input class=\"navbar_input_search\" name = \"search\" value=\"\" type=\"text\"/>\n" +
                                "        </div>\n" +
                                "        <div class=\"win_navbar_content\">\n" +
                                "            <div id=\"btn_upload\" class=\"win_navbar_btn\" >\n" +
                                "                <span>上传</span>\n" +
                                "                <ul>\n" +
                                "                    <li><span>上传覆盖</span></li>\n" +
                                "                    <li><span>上传忽略</span></li>\n" +
                                "                </ul>\n" +
                                "            </div>\n"+
                                "            <div id=\"btn_add\" class=\"win_navbar_btn\"  >\n" +
                                "                <span>新增</span>\n" +
                                "                <ul>\n" +
                                "                    <li><span>新增文件夹</span></li>\n" +
                                "                    <li><span>新增共享文件夹</span></li>\n" +
                                "                </ul>\n" +
                                "            </div>\n" +
                                "            <div id=\"btn_operation\" class=\"win_navbar_btn\" >\n" +
                                "                <span>操作</span>\n" +
                                "                <ul>\n" +
                                "                    <li><span>下载</span></li>\n" +
                                "                    <li><span>在新窗口打开文件</span></li>\n" +
                                "                    <li><span>加到压缩文件</span></li>\n" +
                                "                    <li><span>压缩到...</span></li>\n" +
                                "                    <li>\n" +
                                "                        <span>复制到/移动到</span>\n" +
                                "                        <ul>\n" +
                                "                            <li><span>复制到...</span></li>\n" +
                                "                            <li><span>移动到...</span></li>\n" +
                                "                        </ul>\n" +
                                "                    </li>\n" +
                                "                    <li><span>剪切</span></li>\n" +
                                "                    <li><span>复制</span></li>\n" +
                                "                    <li><span>删除</span></li>\n" +
                                "                    <li><span>重命名</span></li>\n" +
                                "                    <li><span>创建桌面快捷方式</span></li>\n" +
                                "                    <li><span>属性</span></li>\n" +
                                "                    <li><span>共享</span></li>\n" +
                                "                </ul>\n" +
                                "            </div>\n" +
                                "            <div id=\"btn_tool\" class=\"win_navbar_btn\" >\n" +
                                "                <span>\n" +
                                "                    工具\n" +
                                "                </span>\n" +
                                "                <ul>\n" +
                                "                    <li>\n" +
                                "                        <span>远程连接</span>\n" +
                                "                        <ul>\n" +
                                "                            <li><span>连接设置</span></li>\n" +
                                "                            <li><span>连接列表</span></li>\n" +
                                "                        </ul>\n" +
                                "                    </li>\n" +
                                "                    <li>\n" +
                                "                        <span>装载远程文件夹</span>\n" +
                                "                        <ul>\n" +
                                "                            <li><span>CIFS共享文件夹</span></li>\n" +
                                "                            <li><span>NFS共享文件夹</span></li>\n" +
                                "                        </ul>\n" +
                                "                    </li>\n" +
                                "                    <li><span>装载虚拟设备</span></li>\n" +
                                "                    <li><span>卸载</span></li>\n" +
                                "                    <li><span>转载链表</span></li>\n" +
                                "                    <li><span>共享链接管理器</span></li>\n" +
                                "                </ul>\n" +
                                "            </div>\n" +
                                "            <div id=\"btn_set\" class=\"win_navbar_btn\" ><span>设置</span></div>\n"+
                                "        </div>\n" +
                                "        <!--内容-->\n" +
                                "        <div class=\"box_content\">\n" +
                                "            <div class=\"file_bar\">\n" +
                                "                <ul>\n" +
                                "                    <li>\n" +
                                "                            <div class=\"flex_bar_text\"><span class='flex_bar_img'></span><span>yunhui</span></div>\n" +
                                "                    </li>\n" +
                                "                </ul>\n" +
                                "            </div>\n" +
                                "            <div class=\"file_partition file_partition_1\"></div>\n" +
                                "            <div class=\"file_content\">\n" +
                                "                <div class=\"file_content_td\">\n" +
                                "                    <div class=\"item\">名称</div>\n" +
                                "                </div>\n" +
                                "                <div class=\"file_partition\"></div>\n" +
                                "                <div class=\"file_content_td\">\n" +
                                "                    <div class=\"item\">大小</div>\n" +
                                "                </div>\n" +
                                "                <div class=\"file_partition\"></div>\n" +
                                "                <div class=\"file_content_td\">\n" +
                                "                    <div class=\"item\">类型</div>\n" +
                                "                </div>\n" +
                                "                <div class=\"file_partition\"></div>\n" +
                                "                <div class=\"file_content_td\">\n" +
                                "                    <div class=\"item\">修改日期</div>\n" +
                                "                </div>\n" +
                                "                <div class=\"file_partition\"></div>\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "    <div id='add_foter' class=\"file_windows\" style=\"display:none;width: 50%;height: auto;position:absolute;top:0;left:25%;font-size: 14px\">\n" +
                                "        <div style=\"text-align: center;width:100%;background: #eee\">新建文件夹</div>\n" +
                                "        <div>\n" +
                                "            <span style='display:inline-block;'>路径：</span><span>aaa</span><br>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入文件夹名称：</span><input type='text' name='folder' style='margin:10px 10%'/>\n" +
                                "        </div>\n" +
                                "        <div class=\"content_wrapper_foter\">\n" +
                                "            <span>确定</span>\n" +
                                "            <span>取消</span>\n" +
                                "        </div>\n" +
                                "    </div>" +
                                "    <!--删除文件-->\n" +
                                "    <div id='delete_foter' class=\"file_windows\" style=\"display:none;width: 50%;height: auto;position:absolute;top:0;left:25%;font-size: 14px\">\n" +
                                "        <div style=\"text-align: center;width:100%;background: #eee\">删除文件</div>\n" +
                                "        <div>\n" +
                                "            <span style='display:inline-block;width: 30%'>路径：</span><span></span><br/>\n" +
                                "            <span style='display:inline-block;width: 30%'>项目名称：</span><span></span>\n" +
                                "        </div>\n" +
                                "        <div class=\"content_wrapper_foter\">\n" +
                                "            <span>删除</span>\n" +
                                "            <span>取消</span>\n" +
                                "        </div>\n" +
                                "    </div>\n"+
                                "   <!--复制文件-->\n" +
                                "    <div id='copy_foter' class=\"file_windows\" style=\"display:none;width: 50%;height: auto;position:absolute;top:0;left:25%;font-size: 14px\">\n" +
                                "        <div style=\"text-align: center;width:100%;background: #eee\">复制文件</div>\n" +
                                "        <div>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入文件名称：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入路径：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入目标路径：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "        </div>\n" +
                                "        <div class=\"content_wrapper_foter\">\n" +
                                "            <span>确定</span>\n" +
                                "            <span>取消</span>\n" +
                                "        </div>\n" +
                                "    </div>\n"+
                                "    <!--移动文件-->\n" +
                                "    <div id='move_foter' class=\"file_windows\" style=\"display:none;width: 50%;height: auto;position:absolute;top:0;left:25%;font-size: 14px\">\n" +
                                "        <div style=\"text-align: center;width:100%;background: #eee\">移动文件</div>\n" +
                                "        <div>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入文件名称：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入路径：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "            <span style='display:inline-block;width: 30%'>请输入目标路径：</span><input type='text' name='folder' style='margin:10px 10%'/><br/>\n" +
                                "        </div>\n" +
                                "        <div class=\"content_wrapper_foter\">\n" +
                                "            <span>确定</span>\n" +
                                "            <span>取消</span>\n" +
                                "        </div>\n" +
                                "    </div>\n"+
                                "</div>";
            $(".file_windows" + box_item).append($L);
            console.log("Aaa");
            http_request('get','http://192.168.1.111:4000/get_file_foder//volume2',null,function (res) {
                var $P=Array();
                $P[0]="";$P[1]="";$P[2]="";$P[3]="";
                console.log(res);
                if(res['data']){
                    res['data'].forEach(function (value,key) {

                        var $S="<ul>\n" +
                            "     <li>\n" +
                            "       <div>\n" +
                            "          <div class=\"flex_bar_text\"><span class='flex_bar_img'></span><span path='"+value.share+"//'>"+value.share+"</span></div>\n" +
                            "       </div>\n" +
                            "     </li>\n" +
                            " </ul>";
                        $(".file_windows" + box_item+" .file_bar>ul>li").append($S);
                        });
                }
                LoadData(box_item);
                //app内部事件
                moveout(box_item);
                box_in_event(box_item);
            });
        });
    });
})();
