(function(){
	function GoodItem(obj){
		this.des=obj;
		this.des = obj;
        var space = 20;
        var colume = 5;
        var width = (1200-space*(colume-1))/colume;
        this.item = $("<div class='good-box' data-id='"+obj.goods_id+"'></div>");
        var name = $("<p class='good-name'>"+obj.goods_name+"</p>");
        var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb+"' alt=''></p><h3>￥"+obj.price+"</h3><p class='good-center'>"+obj.goods_desc +"</p>");         
        this.item.append(name);
        this.item.append(other);
          this.item.css({
            width:width+"px",
            height:"384px",
            border:"2px #ff4411 solid",
            "box-sizing":"border-box",
            float:"left",
            margin:"16px 16px 16px 0",
            overflow:"hidden",
            position:"relative"
        });
        name.css({
            position:"absolute",
            width:"384px",
            height:"45px",
            "line-height":"20px",
            display:"none",
            
            background:"red",
        });

        this.item.hover(function () {
        	
            $(this).children().css("display","block");
        },function () {
            $(".good-name").css("display","none");
        	 
        }); 
	};
	GoodItem.prototype.click=function(callback){
		this.item.on("click",this,callback);
		return this;
		
	}
	function Good(url,parm,superView,action){
		this.superView=superView;
		this.loadData(url,parm,superView,action);
		this.goodsView();
	};
	Good.prototype.loadData=function(url,parm,superView,action){
		$.get(url,parm,function(result){
			if(result.code==0){
				this.showGoodsView(result.data,superView,action);
			}	
		}.bind(this));
	};
	Good.prototype.showGoodsView=function(goods,superView,action){
		//console.log(goods);
		goods.forEach(function(data){
			superView.append(new GoodItem(data).click(action).item);
		});
	};
	//点击商品列表跳转到商品详情页面
    Good.prototype.goodsView=function(){
    	$(document).on("click",".good-box",function(){
		    var gid = $(this).data("id");
		    //console.log(gid);
		    location.href ="details.html?goods_id="+gid;
  
	    });		
    };
    window.Good=Good;
})();
