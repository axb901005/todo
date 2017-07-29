
	function register() {
    var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var name = chars[parseInt(Math.random()*chars.length)]+parseInt(Math.random()*100000);
    console.log(name);
    var url = "http://h6.duchengjiu.top/shop/api_user.php";
    var parm = {status:"register",username:name,password:"111111"};
    $.post(url,parm,function (result) {
        console.log(result.data);
        
    });
}
register();
	

