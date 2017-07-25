function init(){
	$(".header-top-login").click(function(){
		new Login(function(user){
		   $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
	    })
	});
   //导航
   new Navigater().createRiew(PRODUCT_HOST+PRODUCT_TYPE,$('.main-nav-container'),function(event){
   	console.log(event);
   });
	new corouselView.Corouse("#left-course",[{imagePath:"img/hot1.jpg"},{imagePath:"img/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(3000);
	new corouselView.Corouse("#center-course",[{imagePath:"img/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"},{imagePath:"img/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"}],752,400).putSuperView().createControlButton().startTimer(3000,function(){
		var r=parseInt(Math.random()*256);
		var g=parseInt(Math.random()*256);
		var b=parseInt(Math.random()*256);
		$(".main-course").css("background-color","rgb("+r+","+g+","+b+")");
	});
	new corouselView.Corouse("#right-course",[{imagePath:"img/hot1.jpg"},{imagePath:"img/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(3000);
	//parm,superView,action
	 new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function (event) {
        console.log(event.data); 
    });

};
init();