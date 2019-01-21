//磁盘管理
(function () {
    function box_in_event(item) {
        //canvas画图，百分比圆形
        canvas();
        function canvas(){
            // var c = document.getElementById("process");
            var c = $(".file_windows"+item+" #process")[0];
            if(!c){
                return;
            }
            var ctx = c.getContext('2d');
            var centerX = c.width/2;   //Canvas中心点x轴坐标
            var centerY = c.height/2;  //Canvas中心点y轴坐标
            var rad = Math.PI*2/100; //将360度分成100份，那么每一份就是rad度
            var speed = 0;         //加载的快慢就靠它了
            animate();
            function animate(){
                window.requestAnimationFrame(function(){
                    if(speed < 80 ){
                        animate();
                    }
                });
                ctx.clearRect(0, 0, c.width, c.height);
                speed += 1;
                drawCircle(ctx,speed);
            }
            function drawCircle(ctx,percent){
                //画白色的静态圆
                ctx.save();
                ctx.strokeStyle = "#ddd";
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 45, 0, Math.PI*2, false);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();


                //画进度环
                ctx.save();
                ctx.strokeStyle = "rgb(61,133,204)";
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 45, -Math.PI/2, -Math.PI/2 +percent*rad, false);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();

                //百分比文字绘制
                ctx.save();
                ctx.fillStyle = "rgb(61,133,204)";
                ctx.font = "bold 21px Arial";

                //绘制字体并指定位置
                ctx.fillText(percent.toFixed(0) + '%', centerX-20, centerY+10);
                ctx.restore();
            }
        }
    }
    var randomNumbe=RandomNumBoth(1000,9999);
    tname.push("磁盘管理");
    timg.push("storage.png");
    tid.push(randomNumbe);
    createApp(function () {
        //创建窗口
        function disk_event(box_item) {
            //默认事件
            // 点击content_wrapper_foter取消按钮收回事件
            $(".file_windows"+box_item+" .content_wrapper_foter>.no").click(function (e) {
                console.log("收回");
                $(this).parent().parent().parent().hide();
                e.stopPropagation()
            });
            //设置不可点反射
            $(".file_windows"+box_item+" .bg_tips_box").off('click').on('click',function () {
                console.log("反射");
                setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 0);
                setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 100);
                setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 200);
                setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 300);
            });
            $(".file_windows"+box_item+" .tips_box").off('click').on('click',function (e) {
                e.stopPropagation();
            });
            // 点击content_wrapper_foter确认
            $(".file_windows"+box_item+" .disk_delet_storage .yes").on('click',function (e) {
                console.log("删除");
                var his = this;
                var type =$(".file_windows"+box_item+" .disk_delet_storage").attr('type');
                switch (type){
                    case 'raid_group':
                        console.log("raid_group");
                        raid_name = $(".file_windows"+box_item+" .raid_group #attr .raid_group_name>span").attr("v"),
                        url = 'http://192.168.1.111:4000/del_raid/'+raid_name;
                        console.log(url);
                        $.get(url, function(data,status) {
                            console.log(data);
                            alert(data);
                            $(".file_windows"+box_item+" .disk_delet_storage").hide();
                            $(".file_windows"+box_item+" .raid_group #attr").remove();
                        });
                        break;
                    case 'disk_space':
                        console.log("disk_space");
                        name = $(".file_windows"+box_item+" .disk_space #attr .disk_space_name>span").attr("v");
                        mount = $(".file_windows"+box_item+" .disk_space #attr .disk_space_name>span").attr("mount");
                        $.get('http://192.168.1.111:4000/del_lvm/'+name+'/mount/'+mount, function(data,status) {
                            console.log(data);
                            alert(data);
                            $(".file_windows"+box_item+" .disk_delet_storage").hide();
                            $(".file_windows"+box_item+" .disk_space #attr").remove();
                        });
                        break;
                }

            });
            //系统概况数据加载
            $.get('http://192.168.1.111:4000/get_df', {},
                function(data,status) {
                    $P ="";
                    console.log(data);
                    data['data'].forEach(function (value, key) {
                        //存储空间名称
                        var name = value.name;
                        //存储空间大小
                        var size = value.size;
                        //已使用大小
                        var size_used = value.used;
                        //剩余大小
                        var size_free = value.free;
                        //类型
                        var fs_type = value.fs_type;
                        //使用百分比
                        var size_percent = value.percent;
                        //文件系统
                        var mkfs = value.mkfs;
                        //属于哪个raid
                        var group_name = value.of_raid_name;
                        $P += "  <div>\n" +
                            "      <div>"+name+"</div>\n" +
                            "      <div>位于"+group_name+","+mkfs+"</div>\n" +
                            "      <div><span>"+size_free+"</span><span>/"+size+"</span></div>\n" +
                            "      <div><span>"+size_percent+"</span></div>\n" +
                            "  </div>";
                        });
                    $(".file_windows"+box_item+" .system_overview .partition_info>li").append($P);
                    //点击下拉事件
                    //系统概况右侧界面下拉事件
                    $(".file_windows"+box_item+" .storage_right_block .item-title").click(function () {
                        console.log("box_in_event");
                        if($(this).siblings("div").children("ul").css("display")=="block"){
                            $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                                $(this).css("display","none");
                            });
                        }else {
                            $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
                        }
                    });
                });
                $(".file_windows"+box_item+" .storage_item").on('click',function(){
                    //添加选中事件
                    $(this).css("background","#ccc").siblings().css("background","none");
                    if( this.innerText=="系统概况" ){
                        console.log("系统概况11");
                        $( $(".file_windows"+box_item +" .storage_right>div")[0] ).show().siblings().hide();

                    }else if( this.innerText=="RAID Group" ){
                        console.log("RAID Group");
                        $( $(".file_windows"+box_item+" .storage_right>div")[1] ).show().siblings().hide();
                            $.get('http://192.168.1.111:4000/get_raid', {},
                            function(data,status) {
                                console.log(data);
                                $P = "";
                                data['data'].forEach(function (value,key) {
                                    $L = "";
                                    //group名称
                                    var group_name = value.raid_name;
                                    //group类型
                                    var group_type = value.type;
                                    //状态
                                    var status = "active";
                                    //path
                                    var raid_path = value.raid_path;
                                    //group大小
                                    var size_disk_group_MB = value.size;
                                    //剩余大小
                                    var size_free_disk_group_MB = value.free_size;
                                    //已使用大小
                                    var size_used_disk_group_MB = value.used_size;

                                    value.disk_arr.forEach(function (value1,key) {
                                        //磁盘状态
                                        var flag_status = value1;
                                        //磁盘名称
                                        var harddisk_name = value1;
                                        //磁盘类型
                                        var harddisk_type = value1;
                                        //磁盘的大小
                                        var size_harddisk = value1;
                                        $L +="<tr style=\"background: #fff\">\n" +
                                            "    <td>"+harddisk_name+"</td>\n" +
                                            "    <td>硬盘"+(key+1)+"</td>\n" +
                                            // "    <td>"+size_harddisk+"</td>\n" +
                                            // "    <td>"+harddisk_type+"</td>\n" +
                                            // "    <td>"+flag_status+"</td>\n" +
                                            "</tr>";
                                    });
                                    $P +="<li>\n" +
                                        "                        <div class=\"raid_group_name\">\n" +
                                        "                            <span v=\""+raid_path+"\">"+group_name+"</span>\n" +
                                        "                            <div>\n" +
                                        "                                <span>"+size_used_disk_group_MB+"</span>\n" +
                                        "                                <span>/"+size_disk_group_MB+"</span>\n" +
                                        "                            </div>\n" +
                                        "                            <div>\n" +group_type+
                                        "                            </div>\n" +
                                        "                        </div>\n" +
                                        "                        <div class=\"raid_group_content\">\n" +
                                        "                            <ul class=\"raid_group_info\">\n" +
                                        "                                <li>\n" +
                                        "                                    <div>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>存储空间类型</td>\n" +
                                        "                                                <td>"+group_type+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>支持多个卷</td>\n" +
                                        "                                                <td>是</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>状态</td>\n" +
                                        "                                                <td>"+status+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>容量</td>\n" +
                                        "                                                <td>"+size_disk_group_MB+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>已用容量</td>\n" +
                                        "                                                <td>"+size_used_disk_group_MB+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>可用容量</td>\n" +
                                        "                                                <td>"+size_free_disk_group_MB+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                        <div><span>硬盘信息</span></div>\n" +
                                        "                                        <table class='wubangshun'>\n" +
                                        "                                            <tr style=\"background: #6eb6de;\">\n" +
                                        "                                                <td>设备</td>\n" +
                                        "                                                <td>编号</td>\n" +
                                        "                                                <td>硬盘大小</td>\n" +
                                        "                                                <td>硬盘类型</td>\n" +
                                        "                                                <td>状态</td>\n" +
                                        "                                            </tr>\n" +$L+
                                        "                                        </table>\n" +
                                        "                                        <div><span>可用Hot Spare硬盘</span></div>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr style=\"background: #6eb6de;\">\n" +
                                        "                                                <td>设备</td>\n" +
                                        "                                                <td>编号</td>\n" +
                                        "                                                <td>硬盘大小</td>\n" +
                                        "                                                <td>硬盘类型</td>\n" +
                                        "                                                <td>状态</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr style=\"background: #fff\">\n" +
                                        "                                                <td>无可用备缓硬盘</td>\n" +
                                        "                                                <td></td>\n" +
                                        "                                                <td></td>\n" +
                                        "                                                <td></td>\n" +
                                        "                                                <td></td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>存储空间</td>\n" +
                                        "                                                <td>LUN(段落分块)</td>\n" +
                                        "                                                <td>可用容量</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>"+size_disk_group_MB+"</td>\n" +
                                        "                                                <td>0 Bytes</td>\n" +
                                        "                                                <td>0 Bytes</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                    </div>\n" +
                                        "                                </li>\n" +
                                        "                            </ul>\n" +
                                        "                        </div>\n" +
                                        "                    </li>";
                                            });
                                $(".file_windows"+box_item+" .raid_group>ul").empty();
                                $(".file_windows"+box_item+" .raid_group>ul").append($P);
                                //点击选中
                                $(".file_windows"+box_item+" .raid_group>ul>li").off("click").on('click',function(){
                                    $(this).css('background','rgb(221,228,235)').siblings('li').css('background','none');
                                    $(this).attr('id','attr').siblings('li').removeAttr('id','attr');
                                });
                                //raid 点击删除按钮弹出窗口
                                $(".file_windows"+box_item+" .raid_group .storage_tool_delete").off("click").on("click",function(){
                                    var text =$(".file_windows"+box_item+" .raid_group #attr>.raid_group_name>span").text();
                                    if(!text){
                                       alert("请选择要删除的项目！");return;
                                    }
                                    $(".file_windows"+box_item+" .disk_delet_storage h6>span").text(text);
                                    $(".file_windows"+box_item+" .disk_delet_storage").attr('type','raid_group');
                                    $(".file_windows"+box_item+" .disk_delet_storage").show();
                                });
                                //点击下拉事件
                                $(".file_windows"+box_item+" .storage_right_block .raid_group_name").off("click").on("click",function(){
                                    console.log("box_in_event");
                                    if($(this).siblings("div").children("ul").css("display")=="block"){
                                        $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                                            $(this).css("display","none");
                                        });
                                    }else {
                                        $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
                                    }
                                });
                            }
                        );
                    }else if( this.innerText=="存储空间" ){
                        console.log("存储空间");
                        $($(".file_windows"+box_item+" .storage_right>div")[2] ).show().siblings().hide();
                                $.get('http://192.168.1.111:4000/get_df',
                            {
                            },
                            function(data,status) {
                                console.log(data);
                                $P ="";
                                data['data'].forEach(function (value, key) {
                                    //存储空间名称
                                    var name = value.name;
                                    var mount = value.mount;
                                    var disk_name = value.path;
                                    //存储空间大小
                                    var size = value.size;
                                    //已使用大小
                                    var size_used = value.used;
                                    //剩余大小
                                    var size_free = value.free;
                                    //类型
                                    var fs_type = value.mkfs;
                                    //使用百分比
                                    var size_percent = value.percent;
                                    //属于哪个raid
                                    var group_name = value.of_raid_name;
                                    $P += " <li>\n" +
                                        "                        <div class=\"disk_space_name\">\n" +
                                        "                            <span v=\""+disk_name+"\" mount=\""+mount+"\">" + name + "</span>-正常\n" +
                                        "                            <div>\n" +
                                        "                                <span>" + size_used + "</span>\n" +
                                        "                                <span>/" + size + "</span>\n" +
                                        "                            </div>\n" +
                                        "                            <div>\n" + fs_type +
                                        "                            </div>\n" +
                                        "                        </div>\n" +
                                        "                        <div class=\"disk_space_content\">\n" +
                                        "                            <ul class=\"disk_space_info\">\n" +
                                        "                                <li>\n" +
                                        "                                    <div>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>存储空间类型</td>\n" +
                                        "                                                <td>Basic</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>RAID Group</td>\n" +
                                        "                                                <td>" + group_name + "</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>文件系统</td>\n" +
                                        "                                                <td>" + fs_type + "</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>状态</td>\n" +
                                        "                                                <td>正常</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>容量</td>\n" +
                                        "                                                <td>" + size + "</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>已用容量</td>\n" +
                                        "                                                <td>" + size_used + "</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>可用容量</td>\n" +
                                        "                                                <td>" + size_free + "</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>共享文件夹使用</td>\n" +
                                        "                                                <td>LUN(一般文件)</td>\n" +
                                        "                                                <td>可用容量</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>无</td>\n" +
                                        "                                                <td>无</td>\n" +
                                        "                                                <td>无</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                    </div>\n" +
                                        "                                </li>\n" +
                                        "                            </ul>\n" +
                                        "                        </div>\n" +
                                        "                    </li>"
                                                });
                                $(".file_windows"+box_item+" .disk_space>ul").empty();
                                $(".file_windows"+box_item+" .disk_space>ul").append($P);
                                //点击选中
                                $(".file_windows"+box_item+" .disk_space>ul>li").off("click").on('click',function(){
                                    $(this).css('background','rgb(221,228,235)').siblings('li').css('background','none');
                                    $(this).attr('id','attr').siblings('li').removeAttr('id','attr');
                                });
                                //删除
                                $(".file_windows"+box_item+" .disk_space .storage_tool_delete").off("click").on('click',function(){
                                    var text =$(".file_windows"+box_item+" .disk_space #attr>.disk_space_name>span").text();
                                    if(!text){
                                        alert("请选择要删除的项目！");return;
                                    }
                                    $(".file_windows"+box_item+" .disk_delet_storage h6>span").text(text);
                                    $(".file_windows"+box_item+" .disk_delet_storage").attr('type','disk_space');
                                    $(".file_windows"+box_item+" .disk_delet_storage").show();
                                });
                                //点击下拉事件
                                $(".file_windows"+box_item+" .storage_right_block .disk_space_name").off("click").click(function () {
                                    console.log("box_in_event");
                                    if($(this).siblings("div").children("ul").css("display")=="block"){
                                        $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                                            $(this).css("display","none");
                                        });
                                    }else {
                                        $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
                                    }
                                });
                            }
                        );

                    }else if( this.innerText=="HDD/SDD" ){
                        console.log("HDD/SDD");
                        $( $(".file_windows"+box_item+" .storage_right>div")[3] ).show().siblings().hide();
                                //加载数据
                        $.get('http://192.168.1.111:4000/get_hd', {},
                            function(data,status) {
                                console.log(data)
                                var $P='';
                                data['data'].forEach(function (value,key) {
                                    //硬盘名称
                                    var name = "<span style='font-weight: 600;font-size: 15px;line-height: 30px'>硬盘"+(key+1)+"</span><span style='color: #28a745'>&nbsp&nbsp-&nbsp&nbsp已初始化，正常</span>";
                                    var HD = value.HD;
                                    //生产厂商
                                    var HD_Family = value['Model Family'];
                                    //磁盘大小
                                    var SIZE = value['User Capacity'];
                                    //SMART
                                    var SMART = value['SMART support is'];
                                    //型号
                                    var Model = value['Device Model'];
                                    //序列号
                                    var Serial = value['Serial Number'];
                                    //坏的扇区数
                                    var Reallocated_Sector_Ct = value['Reallocated_Sector_Ct'];
                                    //运行时长H
                                    var Power_On_Hours = value['Power_On_Hours'];
                                    //温度
                                    var Temperature_Celsius = value['Temperature_Celsius'];
                                    //固件版本
                                    var Firmware = value['Firmware Version'];
                                    $P+="<ul>\n" +
                                        "                    <li>\n" +
                                        "                        <div class=\"hdd_ssd_name\">\n" +
                                        "                            <span name="+HD+">"+name+"</span>\n" +
                                        "                            <div></div>\n" +
                                        "                            <div>\n" + Model+"，  "+SIZE+"</div>\n" +
                                        "                        </div>\n" +
                                        "                        <div class=\"hdd_ssd_content\">\n" +
                                        "                            <ul class=\"hdd_ssd_info\">\n" +
                                        "                                <li>\n" +
                                        "                                    <div>\n" +
                                        "                                        <table>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>生产厂商</td>\n" +
                                        "                                                <td>"+HD_Family+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>位置</td>\n" +
                                        "                                                <td>"+HD+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>RAID Group</td>\n" +
                                        "                                                <td>无</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>状态</td>\n" +
                                        "                                                <td style='color:#28a745'>正常</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>S.M.A.R.T.状态</td>\n" +
                                        "                                                <td style='color:#28a745'>SMART</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>使用时长</td>\n" +
                                        "                                                <td>"+Power_On_Hours+"小时</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>坏扇区数量</td>\n" +
                                        "                                                <td>"+Reallocated_Sector_Ct+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>温度</td>\n" +
                                        "                                                <td>"+Temperature_Celsius+"℃</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>序列号</td>\n" +
                                        "                                                <td>"+Serial+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                            <tr>\n" +
                                        "                                                <td>固件版本</td>\n" +
                                        "                                                <td>"+Firmware+"</td>\n" +
                                        "                                            </tr>\n" +
                                        "                                        </table>\n" +
                                        "                                    </div>\n" +
                                        "                                </li>\n" +
                                        "                            </ul>\n" +
                                        "                        </div>\n" +
                                        "                    </li>\n" +
                                        "                </ul>";
                                                });
                                $(".file_windows"+box_item+" .hdd_ssd").empty();
                                $(".file_windows"+box_item+" .hdd_ssd").append($P);
                                //点击下拉事件
                                $(".file_windows"+box_item+" .storage_right_block .hdd_ssd_name").off('click').on('click',function () {
                                    console.log("box_in_event");
                                    if($(this).siblings("div").children("ul").css("display")=="block"){
                                        $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                                            $(this).css("display","none");
                                        });
                                    }else {
                                        $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
                                    }
                                });
                            });
                    }else{
                        $( $(".file_windows"+box_item+" .storage_right>div")[3] ).hide().siblings().hide();
                    }
                });
        }
        function add_raid_event(box_item){
            //定义一个二维数组
            var city=[
                ["6","12","24"]
            ];
            var sltCountry=$(".file_windows"+box_item+' .add_raid .raid_type')[0];
            var sltCity=$(".file_windows"+box_item+' .add_raid .raid_max')[0];
            var raid_desc=$(".file_windows"+box_item+' .add_raid #raid_desc')[0];
            var raid_max_content=$(".file_windows"+box_item+' .add_raid .raid_max_content')[0];
            var min_max_code=$(".file_windows"+box_item+' .add_raid .min_max_code')[0].children[1];
            $(".file_windows"+box_item+" #raid_type").change(function () {
                console.log("onchange")
                console.log(sltCountry.selectedIndex)
                if(sltCountry.selectedIndex>=2){
                    raid_max_content.style.display="block";
                    var country=city[0];    //得到对应国家的城市数组
                    sltCity.length=0;    //清空城市下拉框，仅留提示选项。
                    //通过for循环，将城市中的值填充到城市下拉框中
                    for(var i=0;i<country.length;i++){
                        sltCity[i]=new Option(country[i],country[i]);
                    }
                }else {
                    raid_max_content.style.display="none";
                }
                switch(sltCountry.selectedIndex){
                    case 0:
                        min_max_code.innerHTML='1/1';
                        break;
                    case 1:
                        min_max_code.innerHTML='2/4';
                        break;
                    case 2:
                        min_max_code.innerHTML="3/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 3:
                        min_max_code.innerHTML="4/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 4:
                        min_max_code.innerHTML="4/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 5:
                        min_max_code.innerHTML="2/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    default:
                        break
                }
                raid_desc.value=sltCountry.options[sltCountry.selectedIndex].text;
            });
            $(".file_windows"+box_item+" #raid_max").change(function () {
                switch(sltCountry.selectedIndex){
                    case 1:
                        min_max_code.innerHTML='2/4';
                        break;
                    case 2:
                        min_max_code.innerHTML="3/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 3:
                        min_max_code.innerHTML="4/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 4:
                        min_max_code.innerHTML="4/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    case 5:
                        min_max_code.innerHTML="2/"+sltCity.options[sltCity.selectedIndex].text;
                        break;
                    default:
                        break
                }
            });
            //点击添加raid
            $(".file_windows"+box_item+" .add_raid .content_wrapper_foter>span:first-child").click(function () {
                var raid_type=$(".file_windows"+box_item+' .add_raid .raid_type')[0];
                var min_max_code=$(".file_windows"+box_item+" .add_raid .min_max_code>span");
                var select_disk_li=$(".file_windows"+box_item+" .add_raid .select_disk ul:last-child>li");
                if(((select_disk_li.length) < parseInt(min_max_code.text().split('/')[0])) || ((select_disk_li.length) > parseInt(min_max_code.text().split('/')[1]))){
                    console.log("硬盘选择有误，请指定所需的硬盘！");
                    alert("请指定所需的硬盘！")
                }else {
                    console.log("满足要求");
                    //磁盘ID
                    var disk_id = '';
                    //磁盘类型
                    var raid_type_value = raid_type.options[raid_type.selectedIndex].text;
                    //磁盘检查
                    // var check = raid_type.options[raid_type.selectedIndex].text.toLowerCase().replace(/\s+/g,"");
                    for(var i=0;i<select_disk_li.length;i++){
                        if(i==0){
                            disk_id += $(".file_windows"+box_item+" .add_raid .select_disk ul:last-child>li:eq("+i+")>span:eq(1)").attr('name');
                        }else {
                            disk_id += " "+$(".file_windows"+box_item+" .add_raid .select_disk ul:last-child>li:eq("+i+")>span:eq(1)").attr('name');
                        }
                    }
                    $(".file_windows"+box_item+'input:radio[name="sex"]:checked').val();
                    if($(".file_windows"+box_item+" .disk_check .disk_check_up_yes").is(":checked")){
                        var check = 'yes';
                    }else {
                        var check = 'no';
                    }
                    var type = raid_type_value.split(' ')[1];
                    if(type == null){
                        type = 'basic';
                    }
                    console.log(disk_id+type+check);
                    var url = 'http://192.168.1.111:4000/add_raid/'+type+'/disk/'+disk_id;
                        $.get(url, {},
                        function(data,status) {
                            // var obj = eval('(' + data + ')');
                            console.log(data)
                            if(data['errcode'] == 0){
                                alert("创建成功");
                                $(".file_windows"+box_item+" .add_raid").slideUp();
                            }else {
                                alert("创建失败！");
                            }
                                });
                }
            });
        }
        function raid_group_event(box_item){
            //raid 点击添加按钮弹出添加窗口
            $(".file_windows"+box_item+" .raid_group .storage_tool_add").click(function () {
                $(".file_windows"+box_item+" .add_raid").show();
                if($(".file_windows" + box_item + " .select_disk>ul:eq(0)>li").length == 0){
                        $.get('http://192.168.1.111:4000/get_hd', {},
                        function(data,status) {
                            var $P = '';
                            console.log(data);
                            data['data'].forEach(function (value, key) {
                                //硬盘名称
                                var name = "硬盘" + value.HD;
                                var is_ini = value.is_ini;
                                var disk_name = value.HD;
                                //磁盘大小
                                var size = value['User Capacity'].match(/([^\[\]]+)(?=\])/g)[0];
                                if(is_ini == "False"){
                                    $P += "<li> <span>"+name+" - SATA / HDD "+size+"</span><span style=\"float: right;color: green;font-size: 20px;font-weight: 800;width:20px;cursor:pointer\" name=\""+disk_name+"\">+</span></li>"
                                }
                            });
                            $(".file_windows" + box_item + " .select_disk>ul:eq(0)").append($P);
                            //绑定选择磁盘事件
                            $(".file_windows"+box_item+' .add_raid .select_disk ul:first-child>li>span:last-child').click(function () {
                                console.log('click')
                                if($(this).text() == '+'){
                                    if(($(".file_windows"+box_item+" .add_raid .select_disk ul:last-child>li").length) < parseInt($(".file_windows"+box_item+" .add_raid .min_max_code>span").text().split('/')[1])){
                                        $(this).text('-');
                                        $(".file_windows"+box_item+" .add_raid .select_disk ul:last-child").append($(this).parent().clone(true));
                                        $(this).parent().remove();
                                    }
                                }else {
                                    $(this).text('+');
                                    $(".select_disk ul:first-child").append($(this).parent().clone(true));
                                    $(this).parent().remove();
                                }
                            });
                                })
                }
            });
        }
        function storage_event(box_item){
            //添加
            $(".file_windows"+box_item+" .disk_space .storage_tool_add").click(function () {
                $.get('http://192.168.1.111:4000/get_raid', {},
                    function(data,status) {
                        console.log(data);
                        var $P = '';
                        data['data'].forEach(function (value, key) {
                            var name = value.raid_name;
                            var path = value.raid_path;
                            $P += "<option value=\""+path+"\">"+name+"</option>";
                        });
                        //清空再加载...
                        $(".file_windows" + box_item + " .add_storage #raid_group").empty();
                        $(".file_windows" + box_item + " .add_storage #raid_group").append($P);
                        });
                $(".file_windows"+box_item+" .add_storage").show();
            });
            //添加确定按钮
            $(".file_windows"+box_item+" .add_storage .content_wrapper_foter>span:eq(0)").click(function () {
                var group_name =  $(".file_windows" + box_item + " .add_storage #raid_group").find("option:selected").attr('value');
                var mkfs =  $(".file_windows" + box_item + " .add_storage #file_system").find("option:selected").text();
                var size_group = $(".file_windows" + box_item + " .add_storage #storage_capacity").val();
                console.log(group_name,mkfs,size_group);
                var url = 'http://192.168.1.111:4000/add_lvm/'+group_name+'/mkfs/'+mkfs+'/size/'+size_group+'G';
                console.log(url);
                http_request('get',url,null,function(res){
                    alert('创建存储空间成功！');
                    console.log("create_storage_space");
                    $(".file_windows"+box_item+" .add_storage").hide();
                });
            });
        }
        app_open(randomNumbe,1,function (lastbox_item,box_item) {
                var $L =diskmanagement.content;
                $(".file_windows"+box_item).append($L);
                //切换动作
                $($(".file_windows"+box_item+" .storage_right>div")[0] ).show().siblings().hide();
                $(".file_windows"+box_item+" .storage_item:eq(0)").css("background","#ccc");

                //disk内部事件
                disk_event(box_item);
                //raid_group内部事件
                raid_group_event(box_item);
                //添加raid框内事件函数
                add_raid_event(box_item);
                //存储空间内部事件
                storage_event(box_item);
        });
    });
})();

//控制面板
(function () {
    function box_in_event(item) {
        // 点击content_wrapper_foter取消按钮收回事件
        $(".file_windows"+item+" .content_wrapper_foter>.no").click(function (e) {
            console.log("收回");
            $(this).parent().parent().parent().hide();
            e.stopPropagation()
        });
        //设置不可点反射
        $(".file_windows"+item+" .bg_tips_box").off('click').on('click',function () {
            console.log("反射");
            setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 0);
            setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 100);
            setTimeout(function () {  $('.tips_box').css('border','2px solid #666'); }, 200);
            setTimeout(function () {  $('.tips_box').css('border','1px solid #eee'); }, 300);
        });
        $(".file_windows"+item+" .tips_box").off('click').on('click',function (e) {
            e.stopPropagation();
        });
        // $(".file_windows"+item+" .control_tree_root").children("div:first-child").click(function () {
        //     $(this).siblings(".control_tree").slideToggle();
        // });
        $(".file_windows"+item+" .control_tree_root").children("div:first-child").click(function () {
            if($(this).siblings("div").children("ul").css("display")=="block"){
                $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                    $(this).css("display","none");
                });
            }else {
                $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
            }

        });
        //创建窗口
        //切换动作
        //切换主页
        $($(".file_windows"+item+" #control_home_content")).show().siblings().hide();
        $(".file_windows"+item+" #control_home").click(function (e) {
            $($(".file_windows"+item+" #control_home_content")).show().siblings().hide();
        });
        $(".file_windows"+item+" .control .control_app").on('click',function(){
            $(this).css('background','#ccc');
            $(".file_windows"+item+" .control .control_app").not(this).css('background','none');
            //用户账号
            if(($(this)[0]&& $(this)[0].innerText == "用户账号")||($(this).children("span")[0] && $(this).children("span")[0].innerText == "用户账号")) {
                $($(".file_windows"+item+" #control_yhzh")).show().siblings().hide();
                //高级设置
                // $(".file_windows"+item+" #control_yhzh>.tab_strip>span").click(function () {
                //     alert("aa");
                // });
                // $(".file_windows"+item+" #control_yhzh>.tool_bar>.user_tool_add").click(function () {
                //     alert("aa");
                // });
                //加载用户数据
                //防止多次加载
                $.get('http://192.168.1.111:4000/get_user', {}, function(data,status) {
                        var obj = eval('(' + data + ')');
                        console.log(obj)
                        var $P='<tr>' +
                            '<th width=\"100px\">名称</th>' +
                            ' <th >电子邮件</th>' +
                            ' <th >描述</th>' +
                            ' <th >状态</th>' +
                            ' </tr>';
                        obj['data'].forEach(function (value, key) {
                            $P+="<tr>" +
                                "<td>"+value.user+"</td>" +
                                "<td></td>" +
                                "<td>"+value.ps+"</td>" +
                                "<td>正常</td>" +
                                "</tr>";
                        })
                        $(".file_windows"+item+" #control_yhzh table>tbody").empty();
                        $(".file_windows"+item+" #control_yhzh table>tbody").append($P);
                        /*点击选中tr*/
                        $(".file_windows"+item+" #control_yhzh>.user_title>#userTable tr").not(':eq(0)').off('click').on('click',function () {
                            $(this).css('background','#ccc').attr('id','attr').siblings('tr').css('background','none').removeAttr('id');
                        });
                        }
                );
                //点击弹出框
                $(".file_windows"+item+" #control_yhzh>.tool_bar>button").off('click').on('click',function (e) {
                    //添加
                    if($(this).is(".user_tool_add")){
                        //加载数据get_local_group
                        http_request('get','http://192.168.1.111:4000/get_group',null,function(res){
                            console.log(res);
                            $P = '';
                            res['data'].forEach(function (value, key) {
                                var groupname = value.group;
                                $P += "<option value="+key+">"+groupname+"</option>"
                            });
                            $(".file_windows"+item+" .user_add #add_user_group").empty();
                            $(".file_windows"+item+" .user_add #add_user_group").append($P);
                            console.log('加载数据');
                            $(".file_windows"+item+" .user_add").show();
                        });
                        //确定
                        $(".file_windows"+item+" .user_add .content_wrapper_foter>span:eq(0)").off('click').on('click',function () {
                            var name = $(".file_windows"+item+" .user_add #add_user_name").val();
                            if (isEmpty(name)){alert('用户名不能为空');return;}
                            var group_name = $(".file_windows"+item+" .user_add #add_user_group").find("option:selected").text();
                            if (isEmpty(group_name)) {alert('群组名不能为空');return;}
                            var password = $(".file_windows"+item+" .user_add #add_user_password").val();
                            if (isEmpty(password)) {alert('密码不能为空');return;}
                            var ps = $(".file_windows"+item+" .user_add #add_user_desc").val();
                            var url = 'http://192.168.1.111:4000/add_user/'+name+'/pwd/'+password+'/group/'+group_name+'/ps/'+ps;
                            console.log(url);
                            http_request('get',url,null,function(res){
                                if(res['errcode']==0){
                                    console.log('成功');
                                    alert('添加用户成功');
                                    $(".file_windows"+item+" .user_add").hide();
                                }else {
                                    alert('添加用户失败');
                                    console.log('添加用户失败');
                                }
                            });
                        });
                    }
                    //编辑
                    if($(this).is(".user_tool_edit")){
                        if($(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").length !== 0){
                            var text =$(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").html();
                            var describe =$(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(2)").html();
                            console.log(describe);
                            $(".file_windows"+item+" .user_edit .content_item:eq(0)>input").attr('value',text);
                            $(".file_windows"+item+" .user_edit .content_item:eq(1)>input").attr('value',describe);
                            $(".file_windows"+item+" .user_edit").show();
                            // $(".file_windows"+item+" .user_edit").css("display","flex !important");
                            //切换box
                            $(".file_windows"+item+" .user_edit .tab_strip>span").click(function () {
                                if($(this)[0].innerText == "信息"){
                                    $(".user_edit .content_wrapper").hide();
                                    $(".user_edit #user_edit_info").show();
                                }else if($(this)[0].innerText == "用户群组"){
                                    $(".user_edit .content_wrapper").hide();
                                    $(".user_edit #user_edit_usergroup").show();
                                }else if($(this)[0].innerText == "权限"){
                                    $(".user_edit .content_wrapper").hide();
                                    $(".user_edit #user_edit_permission").show();
                                }else if($(this)[0].innerText == "空间配额"){
                                    $(".user_edit .content_wrapper").hide();
                                    $(".user_edit #user_edit_quota").show();
                                }else if($(this)[0].innerText == "速度限制"){
                                    $(".user_edit .content_wrapper").hide();
                                    $(".user_edit #user_edit_speed").show();
                                }
                            });
                            //确定
                            $(".file_windows"+item+" .user_edit .content_wrapper_foter>span:eq(0)").off('click').on('click',function () {
                                var user_name =$(".file_windows"+item+" .user_edit #user_name").val();
                                if (isEmpty(user_name)){alert('用户名不能为空');return;}
                                var ps =$(".file_windows"+item+" .user_edit #user_desc").val();
                                var user_password =$(".file_windows"+item+" .user_edit #user_password").val();
                                if (isEmpty(user_password)){alert('密码不能为空');return;}
                                var url = 'http://192.168.1.111:4000/set_user/'+user_name+'/pwd/'+user_password+'/ps/'+ps;
                                console.log(url)
                                http_request('get',url,null,function(res){
                                    if(res['errcode']==0){
                                        console.log('修改用户信息成功');
                                        alert('修改用户信息成功');
                                        $(".file_windows"+item+" .user_edit").hide();
                                    }else {
                                        alert('修改用户信息失败');
                                        console.log('修改用户信息失败');
                                    }
                                });

                            });
                        }else {
                            alert('请选择要编辑的项目');
                        }

                    }
                    //删除
                    if($(this).is(".user_tool_delete")){
                        if($(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").length !== 0){
                            var text =$(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").html();
                            $(".file_windows"+item+" .delet_user h6>span").html(text);
                            $(".file_windows"+item+" .delet_user").show();
                            //确定http://192.168.1.111:4000/del_user
                            $(".file_windows"+item+" .delet_user .content_wrapper_foter>span:eq(0)").off().on('click',function () {
                                var url = 'http://192.168.1.111:4000/del_user/'+text;
                                console.log(url);
                                http_request('get',url,null,function (res) {
                                    if(res['errcode']==0){
                                        console.log('成功');
                                        alert('删除用户成功');
                                    }else {
                                        alert('删除用户失败');
                                        console.log('删除用户失败');
                                    }
                                    $(".file_windows"+item+" .delet_user").hide();
                                });
                            });
                        }else {
                            alert('请选择要删除的项目');
                        }
                    }
                    //配额
                    if($(this).is(".user_tool_quota")){
                        if($(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").length !== 0){
                            var text =$(".file_windows"+item+" #control_yhzh>.user_title>#userTable #attr>td:eq(0)").html();
                            console.log(text)
                            $(".file_windows"+item+" .quota_user .file_windows_head>span").html("用户配额"+text);
                            $(".file_windows"+item+" .quota_user").show();
                            //加载配额数据
                            var url = 'http://192.168.1.111:4000/get_user_quota/admin';
                            console.log(url);
                            var mount;
                            var reg1;
                            var uhard_data = [];
                            var ghard_data;
                            http_request('get',url,null,function (res) {
                                console.log(res);
                                $P ="";
                                res['data'].forEach(function (value, key) {
                                    //存储空间名称
                                    mount = value.mount;
                                    reg1 = /[a-zA-Z]/g;
                                    uhard_data[key] = value.uhard.replace(reg1,"");
                                    ghard_data = value.ghard.replace(reg1,"");
                                    $P += '<tr>\n' +
                                        '    <td>'+mount+'</td>\n' +
                                        '    <td>无限制</td>\n' +
                                        '    <td>'+ghard_data+'GB</td>\n' +
                                        '    <td><input type="text" value="'+uhard_data[key]+'" style="margin:0px;width: 100px;height: 100%"/></td>\n' +
                                        '    <td>GB</td>\n' +
                                        '</tr>';
                                });
                                $(".file_windows" + item + " .quota_user table>tbody>tr:not(tr:first)").empty();
                                $(".file_windows" + item + " .quota_user table>tbody").append($P);
                            });
                            //确定
                            $(".file_windows"+item+" .quota_user .yes").off().on('click',function () {
                                len = $(".file_windows" + item + " .quota_user table>tbody").children().length;
                                for (var i = 1; i < len;i++){
                                    var size = $(".file_windows" + item + " .quota_user table>tbody>tr:eq("+i+")>td:eq(3)>input").val();
                                    var url = 'http://192.168.1.111:4000/get_user_quota/admin';
                                    if(size != uhard_data[i-1]){
                                        console.log(size)
                                    }
                                    // http_request('get',url,null,function (res) {
                                    //
                                    // })
                                }
                            });
                        }else {
                            alert('请选择要配额的用户');
                        }
                    }
                    e.stopPropagation();
                });
            }
            //用户群组
            if(($(this)[0]&& $(this)[0].innerText == "用户群组")||($(this).children("span")[0] && $(this).children("span")[0].innerText == "用户群组")) {
                $($(".file_windows"+item+" #control_yhqz")).show().siblings().hide();
                //防止重复加载
                http_request('get','http://192.168.1.111:4000/get_group',null,function (res) {
                    console.log(res);
                    var $P = '<tr>' +
                        '<th>用户组名称</th>' +
                        '<th>用户组说明</th>' +
                        '</tr>';
                    res['data'].forEach(function (value, key) {
                        $P += "<tr>" +
                            "<td>" + value.group + "</td>" +
                            "<td>" + value.group + "</td>" +
                            "</tr>";
                    })
                    $(".file_windows" + item + " #control_yhqz table>tbody").empty();
                    $(".file_windows" + item + " #control_yhqz table>tbody").append($P);
                    /*点击选中tr*/
                    $(".file_windows"+item+" #control_yhqz>table tr").not(':eq(0)').off('click').on('click',function (e) {
                        $(this).css('background','#ccc').attr('id','attr').siblings('tr').css('background','none').removeAttr('id');
                    });
                });
                $(".file_windows"+item+" #control_yhqz>.tool_bar>button").off('click').on('click',function () {
                    //添加
                    if($(this).is(".user_tool_add")){
                        $(".file_windows"+item+" .add_usergroup").show();
                        //确定
                        $(".file_windows"+item+" .add_usergroup .content_wrapper_foter>span:eq(0)").off('click').on('click',function () {
                            var groupname = $(".file_windows"+item+" .add_usergroup #usergroup_name").val();
                            var url = 'http://192.168.1.111:4000/add_group/'+groupname;
                            http_request('get',url,null,function (res) {
                                console.log(res);
                                if(res['errcode'] == 0){
                                    console.log('成功');
                                    alert('添加用户组成功');
                                }else {
                                    alert('添加用户组失败');
                                    console.log('添加用户组失败');
                                }
                                $(".file_windows"+item+" .add_usergroup").hide();
                            });
                        });
                    }
                    //编辑
                    if($(this).is(".user_tool_edit")){
                        $(".file_windows"+item+" .edit_usergroup").show();
                        $(".file_windows"+item+" .edit_usergroup .content_wrapper_foter>span:eq(1)").off('click').on('click',function () {
                            $(".file_windows"+item+" .edit_usergroup").hide();
                        });
                    }
                    //删除用户组
                    if($(this).is(".user_tool_delete")){
                        if($(".file_windows"+item+" #control_yhqz>table #attr>td:eq(0)").length !== 0){
                            var text =$(".file_windows"+item+" #control_yhqz>table #attr>td:eq(0)").text();
                            $(".file_windows"+item+" .delet_group h6>span").text(text);
                            $(".file_windows"+item+" .delet_group").show();
                            //取消
                            $(".file_windows"+item+" .delet_group .content_wrapper_foter>span:eq(1)").off('click').on('click',function () {
                                $(".file_windows"+item+" .delet_group").hide();
                            });
                            //确定
                            $(".file_windows"+item+" .delet_group .content_wrapper_foter>span:eq(0)").off('click').on('click',function () {
                                console.log(text);
                                var url = 'http://192.168.1.111:4000/del_group/'+text;
                                http_request('get',url,null,function (res) {
                                    console.log(res);
                                    if(res['errcode'] == 0){
                                        console.log('成功');
                                        alert('删除用户组成功');
                                    }else {
                                        alert('删除用户组失败');
                                        console.log('添加用户组失败');
                                    }
                                    $(".file_windows"+item+" .delet_group").hide();
                                });
                            });
                        }else {
                            alert('请选择要删除的项目');
                        }

                    }
                });
            }
            //网络
            if(($(this)[0]&& $(this)[0].innerText == "网络")||($(this).children("span")[0] && $(this).children("span")[0].innerText == "网络")) {
                $($(".file_windows"+item+" #control_wl")).show().siblings().hide();
                $(".file_windows"+item+" .network_body").hide();
                $(".file_windows"+item+" #network_cg").show();
                $(".file_windows"+item+" #control_wl>.tab_strip>span").off('click').on('click',function () {
                    if(this.innerText=="常规"){
                        $(".file_windows"+item+" .network_body").hide();
                        $(".file_windows"+item+" #network_cg").show();
                    }else if(this.innerText=="网络界面"){
                        if($(".file_windows"+item+" #network_jm tr:eq(1)>td").length == 1){
                            $.post('http://'+data.host+':'+data.port+"/yhos/index.php/Home/Index/get_network_dev_info_by_name",
                                {
                                    networlkName:"enp3s0",
                                },
                                function(data,status) {
                                    var obj = eval('(' + data + ')');
                                    var $P=Array();
                                    $P[0]="<td width=\"60%\">"+obj['network_info_array'][0]['ip']+"</td>";
                                    $P[1]="<td width=\"60%\">"+obj['network_info_array'][0]['mask']+"</td>";
                                    $(".file_windows"+item+" #network_jm tr:eq(1)").append($P[0]);
                                    $(".file_windows"+item+" #network_jm tr:eq(2)").append($P[1]);
                                    $(".file_windows"+item+" #ip").attr("value",obj['network_info_array'][0]['ip']);
                                    $(".file_windows"+item+" #mask").attr("value",obj['network_info_array'][0]['mask']);
                                    $(".file_windows"+item+" #gateway").attr("value",obj['network_info_array'][0]['gw']);
                                    $(".file_windows"+item+" #dns_server").attr("value",obj['network_info_array'][0]['gw']);

                                });
                        }
                        //切换事件
                        $(".file_windows"+item+" .network_body").hide();
                        $(".file_windows"+item+" #network_jm").show();
                        $(".file_windows"+item+" .network_item>ul").hide();
                        //点击下拉
                        $(".file_windows"+item+" .network_item .item-toggle-img").off('click').on('click',function () {
                            $(this).siblings("ul").slideToggle();
                            e.stopPropagation();
                        });
                        //弹出框事件
                        $(".file_windows"+item+" #network_jm>.tool_bar>button").off('click').on('click',function () {
                            //编辑按钮network_edit_ipv4
                            if($(this).is(".network_tool_edit")){
                                //默认显示iPv4
                                $(".file_windows"+item+" #network_edit_ipv4").show().nextAll().hide();
                                $(".file_windows"+item+" .network_edit .tab_strip>span:eq(0)").css("background","#ccc");
                                //显示框框
                                $(".file_windows"+item+" .network_edit").hide();
                                $(".file_windows"+item+" .network_edit .content_wrapper_foter>span:eq(1)").off('click').on('click',function () {
                                    $(".file_windows"+item+" .network_edit").hide();
                                });
                                //切换
                                $(".file_windows"+item+" .tab_strip>span").bind("click",function () {
                                    if($(this).text() == 'IPv4'){
                                        $(".file_windows"+item+" .network_edit .tab_strip>span:eq(0)").css("background","#ccc").siblings().css("background","none");
                                        $(".file_windows"+item+" #network_edit_ipv4").show().nextAll().hide();
                                    }else if($(this).text() == 'IPv6'){
                                        $(".file_windows"+item+" .network_edit .tab_strip>span:eq(1)").css("background","#ccc").siblings().css("background","none");
                                        $(".file_windows"+item+" #network_edit_ipv6").show().siblings().not(".tab_strip").hide();
                                    }else if($(this).text() == '802.1X'){
                                        $(".file_windows"+item+" .network_edit .tab_strip>span:eq(2)").css("background","#ccc").siblings().css("background","none");
                                        alert("正在开发中....")
                                    }
                                });
                            }
                            e.stopPropagation();
                        });
                    }else if(this.innerText=="流量控制"){
                        $(".file_windows"+item+" .network_body").hide();
                        $(".file_windows"+item+" #network_llkz").show();
                    }
                });
            }
            //文件服务
            if(($(this)[0]&& $(this)[0].innerText == "文件服务")||($(this).children("span")[0] && $(this).children("span")[0].innerText == "文件服务")) {
                //加载配置
                $.get('http://192.168.1.111:4000/get_all_service', {}, function(data,status) {
                        var obj = eval('(' + data + ')');
                        console.log(obj['data']);
                        if(obj['data']['samba'] == "0"){
                            $(".file_windows"+item+" #smb").attr("checked","checked");
                        }
                        // if(obj['status']['afp']){
                        //     $(".file_windows"+item+" #afp").attr("checked","checked");
                        // }
                        if(obj['data']['nfs']== "0"){
                            $(".file_windows"+item+" #nfs").attr("checked","checked");
                        }
                        if(obj['data']['vsftp']== "0"){
                            $(".file_windows"+item+" #ftp").attr("checked","checked");
                        }
                        // if(obj['status']['tftp']){
                        //     $(".file_windows"+item+" #tftp").attr("checked","checked");
                        // }
                        
                });
                $($(".file_windows" + item + " #control_wjfw")).show().siblings().hide();
                $(".file_windows"+item+" .fileserver").hide();
                $(".file_windows"+item+" #fileserver_smb").show();
                $(".file_windows"+item+" #control_wjfw>.tab_strip>span").click(function () {
                    if (this.innerText == "SMB/AFP/NFS") {
                        $(".file_windows"+item+" .fileserver").hide();
                        $(".file_windows"+item+" #fileserver_smb").show();
                    }else if(this.innerText == "FTP") {
                        $(".file_windows"+item+" .fileserver").hide();
                        $(".file_windows"+item+" #fileserver_ftp").show();
                    }
                    else if(this.innerText == "TFTP") {
                        $(".file_windows"+item+" .fileserver").hide();
                        $(".file_windows"+item+" #fileserver_tftp").show();
                    }else {
                        alert("正在开发中....")
                    }
                });
                //点击应用显示smb弹出框
                $(".file_windows"+item+" #fileserver_smb .yes").off('click').on('click',function () {
                    $(".file_windows"+item+" .set_smb_service").show();
                    $(".file_windows"+item+" .set_smb_service .yes").off('click').on('click',function () {
                        var smb,nfs,afp;
                        $("#smb").prop("checked") == true? smb = 0:smb=1;
                        $("#nfs").prop("checked") == true? nfs = 0:nfs=1;
                        $("#afp").prop("checked") == true? afp = 0:afp=1;
                        console.log(smb,nfs);
                        var url = 'http://192.168.1.111:4000/set_samba/'+smb;
                        http_request('get',url,null,function (res) {
                            console.log(res);
                            if(res['errcode'] != 0){
                                alert('设置smb失败');
                            }
                        });
                        var url = 'http://192.168.1.111:4000/set_nfs/'+nfs;
                        http_request('get',url,null,function (res) {
                            console.log(res);
                            if(res['errcode'] != 0){
                                alert('设置smb失败');
                            }else {
                                alert('设置成功');
                            }
                            $(".file_windows"+item+" .set_smb_service").hide();
                        })
                    })
                });
                //点击应用显示ftp弹出框
                $(".file_windows"+item+" #fileserver_ftp>.content_wrapper_foter>.yes").off('click').on('click',function () {
                    $(".file_windows"+item+" .set_ftp_service").show(200);
                    $(".file_windows"+item+" .set_ftp_service .yes").off('click').on('click',function (e) {
                        var ftp;
                        $("#ftp").prop("checked") == true? ftp = 0:ftp=1;
                        console.log(ftp)
                        $.get('http://192.168.1.111:4000/set_ftp/'+ftp, {}, function(data,status) {
                            console.log(data);
                            if(data['errcode'] != 0){
                                alert('设置ftp失败');
                            }else {
                                alert('设置成功');
                            }
                            $(".file_windows"+item+" .set_ftp_service").hide(200);
                        });
                        e.stopPropagation()
                    })
                })
            }
            //共享文件夹
            if(($(this)[0]&& $(this)[0].innerText == "共享文件夹")||($(this).children("span")[0] && $(this).children("span")[0].innerText == "共享文件夹")) {
                $($(".file_windows"+item+" #control_share_folders")).show().siblings().hide();
                var url = 'http://192.168.1.111:4000/get_all_share';
                http_request('get',url,null,function (res) {
                    var $P = '';
                    res['data'].forEach(function (value, key) {
                        //存储空间名称
                        var path_name = value.of_df_name;
                        var v='';
                        var path_name1 = value.share;
                        var partition_name = value.of_raid_name;
                        $P += "<li>\n" +
                            "                          <div class=\"item-title\" style=\"height: 50px;\">\n" +
                            "                              <dt>"+path_name1+"</dt>\n" +
                            "                              <div>"+path_name+"（位于"+partition_name+"）</div>\n" +
                            "                          </div>\n" +
                            "                          <div class=\"item_content\" style=\"overflow: hidden\">\n" +
                            "                              <ul class=\"partition_info\" style=\"display: none\">\n" +
                            "                                  <li>\n" +
                            "                                      <div>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">描述</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已停止用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">高级权限</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已启用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">回收站</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已启用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">共享文件夹配额</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已停用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">共享文件夹大小</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">0.00MB</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">文件压缩</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已停用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                          <dl style=\"margin: 0\">\n" +
                            "                                              <dt style=\"display: inline-block;width: 50%\">数据完整性保护</dt>\n" +
                            "                                              <dt style=\"display: inline-block;font-weight: 400\">已停用</dt>\n" +
                            "                                          </dl>\n" +
                            "                                      </div>\n" +
                            "                                  </li>\n" +
                            "                              </ul>\n" +
                            "                          </div>\n" +
                            "                      </li>";
                    });
                    $(".file_windows"+item+" #control_share_folders>div:eq(1)>ul").empty();
                    $(".file_windows"+item+" #control_share_folders>div:eq(1)>ul").append($P);
                    /*点击选中tr*/
                    $(".file_windows"+item+" #control_share_folders>div:eq(1) li:eq(0)").css('background','#ccc').attr('id','attr');
                    $(".file_windows"+item+" #control_share_folders>div:eq(1) li").off('click').on('click',function () {
                        $(this).css('background','#ccc').attr('id','attr').siblings('li').css('background','none').removeAttr('id');
                    })
                    //点击下拉事件，需要的时候可以打开
                    /*$(".file_windows"+item+" #control_share_folders .item-title").click(function () {
                        console.log("box_in_event");
                        if($(this).siblings("div").children("ul").css("display")=="block"){
                            $(this).siblings("div").children("ul").animate({"margin-top":-$(this).siblings("div").children("ul").outerHeight(true)+"px"},"fast",function () {
                                $(this).css("display","none");
                            });
                        }else {
                            if($(this).siblings("div").children("ul").css("margin-top") == "0px"){
                                $(this).siblings("div").children("ul").css("margin-top",-$(this).siblings("div").children("ul").outerHeight(true)+"px");
                            }

                            $(this).siblings("div").children("ul").css("display","block").animate({"margin-top":"0px"},"fast");
                        }
                    });*/
                });
                //点击弹出框
                $(".file_windows"+item+" #control_share_folders>.tool_bar>button").off('click').on('click',function (e) {
                    //添加
                    if ($(this).is(".user_tool_add")) {
                        if($(".file_windows"+item+" .create_share_file_directory #raid_group>option").length == 0){
                            $.get('http://192.168.1.111:4000/get_df', {}, function(data,status) {
                                var $P = '';
                                data['data'].forEach(function (value, key) {
                                    var storage_space_name = value.name;
                                    mount=value.mount;
                                    $P += "<option path=\""+mount+"\">"+storage_space_name+"</option>";
                                });
                                $(".file_windows"+item+" .create_share_file_directory #raid_group").append($P);
                            });
                            // 点击content_wrapper_foter确认
                            $(".file_windows"+item+" .create_share_file_directory .yes").off('click').on('click',function (e) {
                                var folderName = $(this).parent().parent().find("#file_directory").val();
                                var path=$(this).parent().parent().find("#raid_group").find("option:selected").attr('path');
                                // 判断是否为纯空格
                                var re = new RegExp("^[ ]+$").test(folderName);
                                if(!folderName || re || folderName == ''){
                                    alert('文件名不能为空');
                                    return null;
                                }
                                var url = 'http://192.168.1.111:4000/add_share'+path+'/'+folderName;
                                console.log(url);
                                http_request('get',url,null,function(res){
                                    console.log(res);
                                    alert('添加成功！');
                                    $(".file_windows"+item+" .create_share_file_directory").hide();
                                });
                            });
                        }
                        $(".file_windows"+item+" .create_share_file_directory").show();
                    }
                    //删除
                    if ($(this).is(".user_tool_delete")) {
                        var text =$(".file_windows"+item+" #control_share_folders #attr>.item-title>dt").text();
                        console.log('删除');
                        $(".file_windows"+item+" .delet_share_file_directory h6>span").html(text);
                        $(".file_windows"+item+" .delet_share_file_directory").show();
                        //确定
                        $(".file_windows"+item+" .delet_share_file_directory .content_wrapper_foter>span:eq(0)").click(function () {
                            var file_name =text;
                            console.log(file_name);
                            $.get('http://192.168.1.111:4000/del_share/'+file_name,{},
                            function (data, status) {
                                console.log(data);
                                if(data['errcode']==0){
                                    console.log('删除文件夹成功');
                                    alert('删除文件夹成功');
                                    $(".file_windows"+item+" .delet_share_file_directory").hide();
                                }else {
                                    alert('删除文件夹失败');
                                    console.log('删除文件夹失败');
                                }
                                        });
                            $(this).unbind("click");
                        });
                    }
                });
            }
        });
        var dragTH; //记录拖拽的列
        //分割线
        function isNullOrUndefined(obj) {
            if (typeof(obj) == "undefined" || obj == null) {
                return true;
            }
            return false;
        }
        function thisMove() {
            $("#userTable th").mousemove(function (e) {
                //改鼠标样式
                if (e.offsetX > $(this).innerWidth() - 5) {
                    $(this).css({cursor: "e-resize"});
                } else {
                    $(this).css({
                        cursor: "default"
                    });
                }
            });
        }
        thisMove();
        $("#userTable th").mousedown(function (e) {
            var his = this;
            if (e.offsetX > $(this).innerWidth() - 5) {
                dragTH = $(this);
                dragTH.mouseDown = true;
                dragTH.oldX = e.pageX || e.clientX;
                dragTH.oldWidth = $(this).width();
                dragTH.parentOldWidth=$("#userTable").width();
                $("html").css({
                    cursor: "e-resize"
                });
                $("#userTable th").unbind("mousemove");
                $(document).mousemove(function (e1) {
                    if (isNullOrUndefined(dragTH)) {
                        dragTH = $("#userTable th");
                    }
                    if(!isNullOrUndefined(dragTH.mouseDown) && dragTH.mouseDown == true){
                        var difference = (e1.clientX - dragTH.oldX) || (e1.clientX - dragTH.oldX);
                        var thNewWidth = dragTH.oldWidth + difference; //新的宽度
                        var parentNewWidth = dragTH.parentOldWidth + difference; //新的宽度
                        parentNewWidth>=0?null:parentNewWidth=0;
                        thNewWidth>=50? (dragTH.width(thNewWidth),$("#userTable").width(parentNewWidth)):null;
                    }
                });
                // 第三步，释放
                $(document).mouseup(function(e) {
                    $("html").css({
                        cursor: "default"
                    });
                    $(this).unbind("mousemove");
                    $(this).unbind("mouseup");
                    thisMove();
                    // 还原鼠标样式
                    if (isNullOrUndefined(dragTH)) {
                        dragTH = $("#userTable th");
                    }
                    dragTH.mouseDown = false;
                    $(dragTH).css({
                        cursor : "default"
                    });
                });
            }
        });
    }
    var randomNumbe=RandomNumBoth(1000,9999);
    tname.push("控制面板");
    timg.push("control.png");
    tid.push(randomNumbe);
    createApp(function () {
        app_open(randomNumbe,1,function (lastbox_item,box_item) {
            var $L =controlpanel.content;
            $(".file_windows"+box_item).append($L);
            box_in_event(box_item);
        });
    });
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("应用商店");
    // timg.push("appstore.png");
    // tid.push(randomNumbe);
    // createApp(function () {
    //     app_open(randomNumbe,1,function (lastbox_item,box_item) {
    //
    //     });
    // });
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("音乐播放器");
    // timg.push("music.png");
    // tid.push(randomNumbe);
    // createApp(function () {});
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("资源监听器");
    // timg.push("data_monitor.png");
    // tid.push(randomNumbe);
    // createApp(function () {});
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("帮助");
    // timg.push("Support.png");
    // tid.push(randomNumbe);
    // createApp(function () {});
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("搜索");
    // timg.push("search.png");
    // tid.push(randomNumbe);
    // createApp(function () {});
    // var randomNumbe=RandomNumBoth(1000,9999);
    // tname.push("DNS说明");
    // timg.push("help.png");
    // tid.push(randomNumbe);
    // createApp(function () {});
})();