!function(t,n,e,i){
    //T-window
    //N-document
    //E-jQuery & $
    var o=function(t,n){
        //t-节点对象
        //n-参数
        this.init(t,n)
    };
    o.prototype={
        init:function(t,n){
                this.ele=t,
                this.defaults={
                    menu:[{text:"菜单一",callback:function(){}}, {text:"菜单二",callback:function(){}}],
                    target:function(t){},
                    width:100,
                    itemHeight:28,
                    bgColor:"#fff",
                    color:"#333",
                    fontSize:14,
                    hoverBgColor:"#f5f5f5"
                },
                this.opts=e.extend(!0, {}, this.defaults, n),
                this.random=(new Date).getTime()+parseInt(1e3*Math.random()),
                this.eventBind()
        },
        renderMenu:function(menu,node,id,name,th){
                var his=this;
                var p=null;
                if(!(e("#"+id).length>0)) {
                    id ? p = '<ul class="ul-context-menu" id=' + id + '></ul>' : p = '<ul class="ul-context-menu"></ul>';
                    if(name){
                        p = $(p).prepend('<li id="menu_title" class="ui-context-menu-item" style="text-align: center;color: black;font-weight: 600"><span>'+name+'</span></li>');
                    }
                    $.each(menu, function (n, i) {
                        p = $(p).append('<li class="ui-context-menu-item"><a href="javascript:void(0);"><img class="icon" src="' + i.icon + '" /><span>' + i.text + "</span></a></li>");
                        if (i.child) {
                            his.renderMenu(i.child, $(p).children("li:last-child"));
                        }
                    });
                    $(node).append(p);
                    his.initStyle(".ul-context-menu");
                }
                e("#" + id).unbind('click');
                e("#" + id).on("click", ".ui-context-menu-item", function (n) {
                    his.menuItemClick(e(this),name,th),
                        n.stopPropagation()
                });
                if(name){
                    e("#"+id).find("#menu_title>span").text(name);
                }
            },
        initStyle:function(t){
                var n=this.opts;
                e(t).css({
                    width:n.width,
                    backgroundColor:n.bgColor
                }).find(".ui-context-menu-item a").css({
                    color:n.color,fontSize:n.fontSize,height:n.itemHeight,lineHeight:n.itemHeight+"px"
                }).hover(function(){
                    e(this).css({
                        backgroundColor:n.hoverBgColor
                    })},
                    function(){
                        e(this).css({backgroundColor:n.bgColor})})},
        menuItemClick:function(t,name,th){
            var n=this,e;
            name?e=t.index()-1:e=t.index();
            if(e>=0){
                t.parent(".ul-context-menu").hide(),n.opts.menu[e].callback&&"function"==typeof n.opts.menu[e].callback&&n.opts.menu[e].callback(th);
            }
        },
        setPosition:function(t){
            e("#uiContextMenu_"+this.random).css({left:t.clientX+2,top:t.clientY+2}).show()},
        eventBind:function(){
            var t=this;
            this.ele.on("contextmenu",function(n){
                var name =null;
                e(this).attr("path")? name = e(this).text():null;
                console.log(e(this).text());
                n.preventDefault(),
                t.renderMenu(t.opts.menu,"body","uiContextMenu_" + t.random,name,e(this)),
                t.setPosition(n),
                t.opts.target&&"function"==typeof t.opts.target&&t.opts.target(e(this)),
                n.stopPropagation();
            }),
            e(n).on("click",function(){
                e("#uiContextMenu_"+t.random).hide()
            })
        }
    },
    e.fn.contextMenu=function(t){
        //t是传过来的参数
        //this是节点对象
        //返回节点对象
        return new o(this,t),this
    }
}(window,document,jQuery);