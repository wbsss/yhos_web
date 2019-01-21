window.process=new Array();
function boxMove(Node,initx,inity,endx,endy,speed,fn) {
    //Node:要移动的div,initx，inity:初始位置，endx,endy:结束位置，speed：速度
    clearInterval(window.process[Node]);
    var speedX=0,speedY=0;
    var div = document.getElementById(Node);
    div.style.left = div.offsetLeft;
    div.style.top = div.offsetTop;
    window.process[Node] = setInterval(function(){
        // console.log(div.offsetTop)
        var iX=(endx-(div.offsetLeft))/speed;
        var iY=(endy-(div.offsetTop))/speed;
        //改变位置，如果向左则e==500， 向上取整， 否则向右，向下取整，速度=(终点位置 - 当前位置)/一个数
        iX>0? speedX = Math.ceil(iX):speedX = Math.floor(iX);
        iY>0? speedY = Math.ceil(iY):speedY = Math.floor(iY);

        if (div.offsetLeft == endx && div.offsetTop ==endy){//达到，关闭定时器
            clearInterval(window.process[Node]);
            fn&&fn();
        }
        else
        {
            div.style.left = div.offsetLeft+speedX+'px';
            div.style.top = div.offsetTop+speedY+'px';
        }
    },30);
}