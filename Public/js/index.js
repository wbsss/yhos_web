var oLeft=new Array(), oTop=new Array(), oWidth=new Array(), oHeight=new Array();
var timg = new Array();
var tname = new Array();
var tid = new Array();
//判断打开还是移动
var open_move=true;

//判断字符是否为空的方法
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
//http请求
function http_request(type,url,param=null,success_cbk,error_cbk) {
    switch (type) {
        case 'get':
            $(".lodding").show();
            $.get(url,function(res) {
                success_cbk(res);
                $(".lodding").hide();
            }).fail(function(error,data) {
                $(".lodding span").html("服务器请求超时！");
                console.log(data);
                setTimeout("$(\".lodding\").hide();",3000);
            });
            break;
        case 'post':
            $(".lodding").show();
            $.get(url,{param},function(res) {
                success_cbk(res);
                $(".lodding").hide();
            }).fail(function(error) {
                $(".lodding span").html("服务器请求超时！");
                setTimeout("$(\".lodding\").hide();",3000);
            });
            break;
        default:
            return null;
            break;
    }
}

//随机函数
function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
function boxClickDocumentHide(fn){
    //防止触发document点击事件
    $("#dropdown_box,#menu_button,#user_bar,#user_box").mousedown(function (e) {
        e.stopPropagation();
    });
    $(document).mousedown(function () {
        console.log("document");
        boxMove("dropdown_box",20,36,20,-650,2),$("#menu_button").css("background","#666");
        var window_width=$(window).width();
        boxMove("user_box",0,0,window_width-160,-250,2,fn);
        remove_bind();
    });
}
//隐藏移除事件绑定，防止重复绑定
function remove_bind(){
    $(document).unbind('mousedown');
    $('#dropdown_box').unbind('mousedown');
}
//全屏
function full_screen_file_windows(appId) {
    var win = $(".file_windows"+appId);
    oLeft[appId] = win.css("left");
    oTop[appId] = win.css("top");
    oWidth[appId] = win.css("width");
    oHeight[appId] = win.css("height");
    win.animate({
        width:$(window).width() + "px",
        height:$(window).height() - 40 + "px",
        top:"40px",
        left:"0px",
    },0);
    $(window).resize(function () {
        win.animate({
            width:$(window).width() + "px",
            height:$(window).height() - 40 + "px",
            top:"40px",
            left:"0px",
        },10);
    });
    $(".file_windows"+appId+" .border_zoom").css("display", "none");
    $(".file_windows"+appId+" .file_windows_head").unbind("mousedown");
    $(".file_windows"+appId+" .file_windows_head").css("cursor", "auto");
}

//还原
function restore_file_windows(appId) {
    $(window).unbind("resize");
    var win = $(".file_windows"+appId);
    win.animate({
        width:oWidth[appId],
        height:oHeight[appId],
        top:oTop[appId],
        left:oLeft[appId],
    },10);
    $(".file_windows"+appId+" .border_zoom").css("display", "block");
    $(".file_windows"+appId+" .file_windows_head").css("cursor", "move");
    drag(appId);
}
function drag(appId,l, t, w, h) {
    //拖拽-------------
    //窗口靠前
    $(".file_windows"+appId).mousedown(function (e) {
        $(".file_windows").css("z-index", "2");
        $(this).css("z-index", "3");
    });

    $(".file_windows"+appId+" .file_windows_head").mousedown(function (e) {
        //初始化
        if (l && t) {
            $(".file_windows").css("left", l + "px");
            $(".file_windows").css("top", t + "px");
        }
        if (w && h) {
            $(".file_windows").css("width", w + "px");
            $(".file_windows").css("height", h + "px");
        }

        var x = e.pageX;
        var y = e.pageY;
        var left = parseInt($(".file_windows"+appId).css("left"));
        var top = parseInt($(".file_windows"+appId).css("top"));
        $(document).mousemove(function (e1) {
            var x1 = e1.pageX;
            var y1 = e1.pageY;
            var new_top = top + y1 - y;
            var new_left = left + x1 - x;
            new_top > 45 ? null : new_top = 45;
            new_top < $(window).height() - 40 ? null : new_top = parseInt($(window).height()) - 40;
            x1 > 0 ? null : new_left = left - x;
            x1 < $(window).width() ? null : new_left = left + $(window).width() - x;
            $(".file_windows"+appId).css("left", new_left + "px");
            $(".file_windows"+appId).css("top", new_top + "px");
        });
        $(document).bind("mouseup", function (e) {
            $(this).unbind('mousemove');
        });
    });
}
function box_event(appId) {

    //防止事件冒泡，否则会执行拖拽事件
    $(".file_windows"+appId+" .file_windows_head_button>div").mousedown(function (e) {
        e.stopPropagation();
    });
    //关闭-------------
    $(".file_windows"+appId+" .file_windows_head_button>div:eq(2)").click(function (e) {
        $(".file_windows"+appId).remove();
        $("#taskbar>ul .li"+appId).remove();
        e.stopPropagation();
    });
    //缩小-------------
    $(".file_windows"+appId+" .file_windows_head_button div:eq(0)").click(function (e) {
        //临时变量存储left和top，为了解决hide之后获取的left和top不是真实值问题
        var tempL,tempT,tempLw,tempH;
        tempL = $(".file_windows"+appId).css("left");
        tempT = $(".file_windows"+appId).css("top");
        $(".file_windows"+appId).hide();
        $(".file_windows"+appId).css("left",tempL);
        $(".file_windows"+appId).css("top",tempT);
        e.stopPropagation();
    });
    //放大还原窗口-------------
    $(".file_windows"+appId+" .file_windows_head_button div:eq(1)").click(function (e) {
        $(".file_windows"+appId+" .border_zoom").css("display") != "none" ? full_screen_file_windows(appId) : restore_file_windows(appId);
        e.stopPropagation();
    });
    //移入移出
    //缩略图
    $("#taskbar>ul .li"+appId).bind("mouseenter",function (e) {
        $(".little_box").empty();
        $(".little_box").css("left",56+appId*62+"px");
        html2canvas(document.getElementsByClassName("file_windows"+[appId])[0]).then(function(canvas) {
            var width = parseInt($(".file_windows"+appId).css("width"));
            var height = parseInt($(".file_windows"+appId).css("height"));
            document.getElementsByClassName("little_box")[0].appendChild(canvas);
            if(width>height){
                $("canvas").css("width",200+"px");
                $("canvas").css("height",height*200/width+"px");
            }else{
                $("canvas").css("width",width*200/height+"px");
                $("canvas").css("height",200+"px");
            }
        });
        $(".little_box").fadeIn(1000);

    });
    $("#taskbar>ul .li"+appId).bind("mouseleave",function (e) {
        $(".little_box").fadeOut(1000);
        $(".little_box").css("display","none");
    });
    //放大窗口
    $("#taskbar>ul .li"+appId).bind("click",function (e) {
        $(".little_box").fadeToggle(1000);
        $(".file_windows"+appId).toggle(300);
        //恢复之后靠前
        $(".file_windows").css("z-index", "2");
        $(".file_windows"+appId).css("z-index", "3");
    });
}
function show_box() {
    $("#user_bar").bind("click",function (e) {
        console.log("user_bar");
        var window_width=$(window).width();
        parseInt($("#user_box").css("top"))==40?boxMove("user_box",0,0,window_width-160,-250,2):boxMove("user_box",0,0,window_width-160,40,2),boxClickDocumentHide();
        e.stopPropagation();
    });
    $("#menu_button").click(function (e) {
        console.log("menu_button");
        parseInt($("#dropdown_box").css("top"))==36?
            (boxMove("dropdown_box",20,36,20,-650,2),$("#menu_button").css("background","#666")):(boxMove("dropdown_box",20,-999,20,36,2),$("#menu_button").css("background","#999"),boxClickDocumentHide());
        e.stopPropagation();
    });
}
//窗口工厂函数
//id为appid,mode为模式，1表示单例，0表示多例
function app_open(id,mode,fn){
    var result;
    var randomNumbe;

    //单例模式
    var singleton = function(fn){
        return function(randomNumbe){
            if(mode){
                return result||(result=fn.apply(this, arguments));
            }else {
                return fn.apply(this, arguments);
            }

        }
    };
    var createMask = singleton(
        function(appId,img,name){
            var $L = $("<li><img src=\""+img+"\"></li>");
            var $P = $("<div class=\"file_windows\">\n" +
                "    <div class=\"file_windows_head handler\">\n" +
                "        <span>"+name+"</span>\n" +
                "        <div class=\"file_windows_head_button\">\n" +
                "            <div></div>\n" +
                "            <div></div>\n" +
                "            <div></div>\n" +
                "        </div>\n" +
                "    </div>");
            var res= (
                $("body").append($P),
                $("#taskbar>ul").append($L),
                $($L).addClass("li"+appId),
                $($P).addClass("file_windows"+appId),
                $(".file_windows"+appId+" .file_windows_head").css("background","#eee url(\""+img+"\")12px no-repeat"),
                $(".file_windows"+appId+" .file_windows_head").css("background-size","30px")
            );
            return res;
        }
    );

    $(".app"+id).bind("mousedown",function (e) {
        open_move=true;
        //拖动图标
        var left = parseInt($(this).css("left"));
        var top = parseInt($(this).css("top"));
        var x = e.pageX;
        var y = e.pageY;
        var his=this;
        //打开应用
        $(this).bind("click",function (e) {
            var lastrandomNumbe=randomNumbe;

            //若为单例模式
            if(mode&&!$(".file_windows"+lastrandomNumbe).length){
                result=null;
            }
            if(mode&&result){
                return;
            }
            randomNumbe=RandomNumBoth(1000,9999);
            var x1 = e.pageX;
            //判断是打开还是拖动
            if(Math.abs(x1-x)>0){
                open_move=false;
                return;
            };
            //点击图标收回主菜单
            boxMove("dropdown_box",20,36,20,-650,2),$("#menu_button").css("background","#666");
            // 取消事件
            $(document).unbind("mousedown");
            var appId=$(this).attr("class").split(" ")[1];
            var img = $($("#dropdown_box ."+appId).children("img")[0]).attr("src");
            var name =$($("#dropdown_box ."+appId).children("span")[0]).text() ;
            createMask(randomNumbe,img,name);
            drag(randomNumbe);
            boxZoom(".file_windows"+randomNumbe,randomNumbe);
            box_event(randomNumbe);
            $(document).unbind("mousemove");
            $(document).unbind("mouseup");
            $(his).unbind("mouseup");

            //打开第二个窗口显示靠前,并网右下角叠加
            if(lastrandomNumbe){
                var last_left = parseInt($(".file_windows"+lastrandomNumbe).css("left"));
                var last_top = parseInt($(".file_windows"+lastrandomNumbe).css("top"));
                var last_width = parseInt($(".file_windows"+lastrandomNumbe).css("width"));
                var last_height = parseInt($(".file_windows"+lastrandomNumbe).css("height"));
                $(".file_windows"+randomNumbe).css({
                    "top":last_top+30+"px","left":last_left+30+"px","width":last_width+"px","height":last_height+"px",
                });
            }
            fn!=null?fn(lastrandomNumbe,randomNumbe):null;
            e.stopPropagation();
        });
        $(document).bind("mousemove",function (e) {
            var x1 = e.pageX;
            var y1 = e.pageY;
            var new_top = top + y1 - y;
            var new_left = left + x1 - x;
            $(his).css("left", new_left + "px");
            $(his).css("top", new_top + "px");
            // $("#dropdown_box").css("overflow","visible");
            // $(".desktop_app").css("display","none");

        });
        //拖拽实现
        $(document).bind("mouseup",function (e) {
            //恢复滚动条
            // $("#dropdown_box").css("overflow-x","hidden");
            var x1 = e.pageX;
            var y1 = e.pageY;
            if ($(his).parent()[0].tagName == "BODY") {
                var new_top = 60 + parseInt((y1 - 50) / 100) * 100;
                var new_left = 20 + parseInt((x1 - 10) / 100) * 100;
                if( x>$(window).width()-20||y1>$(window).height()-20){
                    var new_top = top;
                    var new_left = left;
                }
            }else {
                var nt = parseInt((y1 - 40) / 120);
                var nl = parseInt((x1 - 10) / 140);
                var new_top = 60 +  nt * 120;
                var new_left = 40 + nl * 140;
                if(nt>4||nt<0||nl>2||nl<0){
                    var new_top = top;
                    var new_left = left;
                    //添加到桌面
                    $("body").append($(his).clone(true));
                    desktop_app_arry($("body>.desktop_app").length);
                }else {
                }
            }
            $(his).css("left", new_left + "px");
            $(his).css("top", new_top + "px");
            //绑定一次就ok
            $(this).unbind("mousemove");
            $(this).unbind("mouseup");
            $(his).unbind("mouseup");
        });
    });
}
//动态加载js脚本和css样式
function loadJs(url,callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
    script.onload = script.onreadystatechange = function(){
        if(script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return ;
        script.onreadystatechange = script.onload = null
        if(callback) callback();
    }
}
function loadCss(url,callback){
    var script = document.createElement('link');
    script.rel = 'stylesheet';
    script.href = url;
    document.head.appendChild(script);
    script.onload = script.onreadystatechange = function(){
        if(script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return ;
        script.onreadystatechange = script.onload = null
        if(callback) callback();
    }
}
loadCss('/yhos/Public/js/app/fileStation/fileStation.css');
loadCss('/yhos/Public/js/app/diskManagement/diskmanagement.css');
loadCss('/yhos/Public/js/app/ipfs/ipfs.css');
loadJs('/yhos/Public/js/app/fileStation/fileStation.js',function(){
    show_box();
    desktop_app_arry(timg.length);
    menu_app_arry1(timg.length);
    right_box();
});
loadJs('/yhos/Public/js/app/diskManagement/data.js',function(){});
loadJs('/yhos/Public/js/app/diskManagement/diskmanagement.js',function(){
    show_box();
    desktop_app_arry(timg.length);
    menu_app_arry1(timg.length);
    right_box();
});
loadJs('/yhos/Public/js/app/ipfs/data.js',function(){});
loadJs('/yhos/Public/js/app/ipfs/ipfs.js',function(){
    show_box();
    desktop_app_arry(timg.length);
    menu_app_arry1(timg.length);
    right_box();
});
function right_box() {
    // $("#dropdown_box > .desktop_app").contextMenu({
    //     width: 110, // width
    //     itemHeight: 30, // 菜单项height
    //     bgColor: "#aaa", // 背景颜色
    //     color: "#fff", // 字体颜色
    //     fontSize: 12, // 字体大小
    //     hoverBgColor: "#bbb", // hover背景颜色
    //     target: function(ele) { // 当前元素
    //         console.log(ele);
    //     },
    //     menu: [{ // 菜单项
    //         text: "新增",
    //         icon: "./images/add.png",
    //         callback: function() {
    //             alert("新增");
    //         },child:[{
    //             text: "新增111",
    //             icon: "./images/copy.png",
    //             callback: function() {
    //                 alert("新增111");
    //             },
    //         }]
    //         },
    //         {
    //             text: "复制",
    //             icon: "./images/copy.png",
    //             callback: function() {
    //                 alert("复制");
    //             },
    //             child:[{
    //                 text: "新增222",
    //                 icon: "./images/copy.png",
    //                 callback: function() {
    //                     alert("新增222");
    //                 },
    //             }]
    //         },
    //         {
    //             text: "粘贴",
    //             icon: "./images/paste.png",
    //             callback: function() {
    //                 alert("粘贴");
    //             }
    //         },
    //         {
    //             text: "删除",
    //             icon: "./images/del.png",
    //             callback: function() {
    //                 alert("删除");
    //             }
    //         }
    //     ]
    //
    // });
}
