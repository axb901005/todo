//为了防止其他插件与jQuery重名可以通过noConflict找到jquery对象重新更改表示jquery的符号
var $=jQuery.noConflict();
(function(){
	function Login(success){this.showLogin(success);}
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class='loginContainer'></div>");
		var closeButton=$("<span>关闭</span>");
		var usernameInput=$("<p><input type='text' placeholder='用户名'></p>");
		var passwordInput=$("<p><input type='password' placeholder='密码'></p>")
		var loginButton=$("<p><button>登录</button></p>");
		loginContainer.css({
			width:"400px",
			height:"300px",
			"background-color":"#ff7400",
			border:"5px solid #ff4d2e",
			position:"absolute",
			top:"50%",
			left:"50%",
			"border-sizing":"border-box",
			margin:"-150px -200px"
		});
		closeButton.css({float:"right",color:"#fff",padding:"5px"});
		closeButton.click(function(){
			loginContainer.stop().fadeOut(300,function(){
				loginContainer.remove();
			});
		});
		loginButton.click(function(){
			$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function(data){
				   console.log(data);
				//登录成功   
				if(data.code==0){
		            loginContainer.stop().fadeOut(500,function(){
				        loginContainer.remove();
				        //执行外面传入的方法
				        success(data.data);
				    });
				}else{
				    alert(data.message);
				}
			});
			
		});
		var inputCss={width:"300px",padding:"20px 0",margin:"0 auto","text-align":"center"};
		usernameInput.css(inputCss);
		passwordInput.css(inputCss);
		loginButton.css(inputCss);
		loginContainer.append(closeButton);
		loginContainer.append(usernameInput);
		loginContainer.append(passwordInput);
		loginContainer.append(loginButton);
		$(document.body).append(loginContainer);	
	};
	window.Login=Login;
})();
