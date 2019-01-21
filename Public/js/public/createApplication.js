function desktop_app_arry(appNum) {
    var j=0;
    for (var i=0;i<appNum;i++){
        var k=i-9*j;
        var $d=$("body>.desktop_app:eq("+(i)+")");

        $($d).css("top",(60+100*k)+"px");
        $($d).css("left",(20+100*j)+"px");
        // console.log($("body>.desktop"));
        if ((i+1)%9==0){
            j++;
        }
    }
}
function menu_app_arry(appNum) {
    var j=0;
    for (var i=0;i<appNum;i++){
        var k=i-6*j;
        var $d=$("#dropdown_box>.desktop_app:eq("+(i)+")");

        $($d).css("top",(40+100*k)+"px");
        $($d).css("left",(20+100*j)+"px");
        // console.log($("body>.desktop"));
        if ((i+1)%6==0){
            j++;
        }
    }
}
function menu_app_arry1(appNum) {
    var j=0;
    for (var i=0;i<appNum;i++){
        var k=i-3*j;
        var $d=$("#dropdown_box>.desktop_app:eq("+(i)+")");

        $($d).css("left",(40+140*k)+"px");
        $($d).css("top",(60+120*j)+"px");
        // console.log($("body>.desktop"));
        if ((i+1)%3==0){
            j++;
        }
    }
}
//创建app
function createApp(callback) {
    var appNum=timg.length;
    var $d="<div class=\"desktop_app app"+tid[appNum-1]+"\"><img src='/yhos/Public/images/"+timg[appNum-1]+"' draggable=\"false\"/><span>"+tname[appNum-1]+"</span></div>";
    $("#dropdown_box").append($d);
    callback();
}