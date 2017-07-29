function goods-Search() {
    var url = "http://h6.duchengjiu.top/shop/api_goods.php";
    var parm = {search_text:"热"};
    $.get(url,parm,function (result) {
        document.write(result.message);
        console.log(result.data);
    });
}
goods-Search();