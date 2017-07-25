var $=jQuery.noConflict();
(function(){
	//现在导航上的每个按钮
	function NavigaterItem(obj){
		var obj=obj||{};
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");
		
	}
	//itemClick-->是NavigaterItem上面的itemClick
	//callback是函数的形参
	NavigaterItem.prototype.itemClick=function(callback){
		//click-->是this.item调用的，是jquery对象里面的click
		this.item.on("click",this,callback);
		return this;
	};
	function Navigater(){
		
	}
	//点击导航按钮时需要知道点击按钮的商品类型的Id
	Navigater.prototype.createRiew=function(url,superView,callback){
		$.get(url,function(result){
			console.log(result);
			if(result.code==0){
				result.data.forEach(function(obj){
					//创建导航列表
					superView.append(new NavigaterItem(obj).itemClick(callback).item);
				});
			};
		});
		
		return this;
		
	};
	
	window.Navigater=Navigater;
})()
