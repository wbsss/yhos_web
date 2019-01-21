function boxZoom(Node) {
    var $L = $("<div class=\"bordertop_zoom border_zoom\"></div>\n" +
        "    <div class=\"borderleft_zoom border_zoom\"></div>\n" +
        "    <div class=\"borderright_zoom border_zoom\"></div>\n" +
        "    <div class=\"borderbottom_zoom border_zoom\"></div>\n" +
        "    <div class=\"border_rt_zoom border_zoom\"></div>\n" +
        "    <div class=\"border_lt_zoom border_zoom\"></div>\n" +
        "    <div class=\"border_lb_zoom border_zoom\"></div>\n" +
        "    <div class=\"border_tb_zoom border_zoom\"></div>");
    $(Node).prepend($L);
    $(Node+">.bordertop_zoom").css({
        "top":"0",
    });
    $(Node+">.borderleft_zoom").css({
        "left":"0",
    });
    $(Node+">.borderright_zoom").css({
        "right":"0",
    });
    $(Node+">.borderbottom_zoom").css({
        "bottom":"0",
    });
    $(Node+">.borderright_zoom,"+Node+">.borderleft_zoom").css({
        "width": "6px", "height": "100%", "cursor":"w-resize", "position": "absolute", "z-index": "999",
    });
    $(Node+">.borderbottom_zoom,"+Node+">.bordertop_zoom").css({
        "height": "6px", "width": "100%", "cursor":"s-resize", "position": "absolute", "z-index": "999",
    });
    $(Node+">.border_rt_zoom").css({
        "top": "0", "right": "0", "cursor":"ne-resize", 
    });
    $(Node+">.border_lt_zoom").css({
        "top": "0", "left":"0", "cursor":"nw-resize", 
    });
    $(Node+">.border_lb_zoom").css({
        "bottom": "0","left": "0","cursor":"ne-resize", 
    });
    $(Node+">.border_tb_zoom").css({
        "bottom": "0","right": "0","cursor":"nw-resize", 
    });
    $(Node+">.border_rt_zoom,"+Node+">.border_lt_zoom,"+Node+">.border_lb_zoom,"+Node+">.border_tb_zoom").css({
        "width": "6px","height": "6px","position": "absolute","z-index": "999",
    });
    //上边框
    $(Node+">.bordertop_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var y = e.pageY;
        var top=parseInt($(Node).css("top"));
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var y1 = e.pageY;
            //计算新坐标
            var new_top=top+y1-y;
            var new_height=height-y1+y;
            //控制范围
            new_height>300?null:(new_height=300,new_top=top+height-300);
            //执行
            $(Node).css("height", new_height + "px");
            $(Node).css("top",new_top+"px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //下边框
    $(Node+">.borderbottom_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var y = e.pageY;
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var y1 = e.pageY;
            //计算新坐标
            var new_height=height-y+y1;
            //控制范围
            new_height>300?null:(new_height=300);
            //执行
            $(Node).css("height", new_height + "px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //左边栏
    $(Node+">.borderleft_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var left=parseInt($(Node).css("left"));
        var width=parseInt($(Node).width());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            //计算新坐标
            var new_left=left+x1-x;
            var new_width=width-x1+x;
            //控制范围
            new_width>500?null:(new_width=500,new_left=left+width-500);
            //执行
            $(Node).css("width", new_width + "px");
            $(Node).css("left",new_left+"px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //右边框
    $(Node+">.borderright_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var width=parseInt($(Node).width());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            //计算新坐标
            var new_width=width-x+x1;
            //控制范围
            new_width>500?null:(new_width=500);
            //执行
            $(Node).css("width", new_width + "px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //右上角
    $(Node+">.border_rt_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var y = e.pageY;
        var top=parseInt($(Node).css("top"));
        var width=parseInt($(Node).width());
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            var y1 = e.pageY;
            //计算新坐标
            var new_top=top+y1-y;
            var new_height=height-y1+y;
            var new_width=width-x+x1;
            //控制范围
            new_height>300?null:(new_height=300,new_top=top+height-300);
            new_width>500?null:(new_width=500);
            //执行
            $(Node).css("height", new_height + "px");
            $(Node).css("width", new_width + "px");
            $(Node).css("top",new_top+"px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //右下角
    $(Node+">.border_tb_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var y = e.pageY;
        var top=parseInt($(Node).css("top"));
        var width=parseInt($(Node).width());
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            var y1 = e.pageY;
            //计算新坐标
            var new_top=top+y1-y;
            var new_height=height-y+y1;
            var new_width=width-x+x1;
            //控制范围
            new_height>300?null:(new_height=300,new_top=top+height-300);
            new_width>500?null:(new_width=500);
            //执行
            $(Node).css("height", new_height + "px");
            $(Node).css("width", new_width + "px");

        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //左上角
    $(Node+">.border_lt_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var y = e.pageY;
        var left=parseInt($(Node).css("left"));
        var top=parseInt($(Node).css("top"));
        var width=parseInt($(Node).width());
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            var y1 = e.pageY;
            //计算新坐标
            var new_top=top+y1-y;
            var new_left=left+x1-x;
            var new_height=height-y1+y;
            var new_width=width-x1+x;
            //控制范围
            new_height>300?null:(new_height=300,new_top=top+height-300);
            new_width>500?null:(new_width=500,new_left=left+width-500);
            //执行
            $(Node).css("height", new_height + "px");
            $(Node).css("width", new_width + "px");
            $(Node).css("left",new_left+"px");
            $(Node).css("top",new_top+"px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
    //左下角
    $(Node+">.border_lb_zoom").bind("mousedown",function (e) {
        //获取初始坐标
        var x = e.pageX;
        var y = e.pageY;
        var left=parseInt($(Node).css("left"));
        var width=parseInt($(Node).width());
        var height=parseInt($(Node).height());
        $(document).mousemove(function (e) {
            //获取鼠标实时坐标
            var x1 = e.pageX;
            var y1 = e.pageY;
            //计算新坐标
            var new_height=height-y+y1;
            var new_left=left+x1-x;
            var new_width=width-x1+x;
            //控制范围
            new_height>300?null:(new_height=300);
            new_width>500?null:(new_width=500,new_left=left+width-500);
            //执行
            $(Node).css("width", new_width + "px");
            $(Node).css("left",new_left+"px");
            $(Node).css("height", new_height + "px");
        });
        $(document).mouseup(function (e) {
            $(this).unbind();
        });
    });
}