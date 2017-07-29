
//获得商品详情
	var parm = location.search.replace("?","");
    var parms = parm.split("=");
    var gid = parms[1];
	$.get(PRODUCT_HOST+GOODS,{goods_id:gid},function (result) {
                console.log(result.data[0]);
                var detail ="";
                detail =`
                        <div class="detail">
                            <img src="${result.data[0].goods_thumb}" alt=""> 
                           <p class="goods-name">${result.data[0].goods_name}</p>
                           <strong class="goods-price">${"￥:"+result.data[0].price}</strong>
                           <p class="goods-desc">${result.data[0].goods_desc}</p>
                           <p class="goods-num"><button class="numLeft">-</button><input type="text"><button class="numRight">+</button></p>
                           <span>加入购物车</span><span>立即购买</span>
                        </div>
                    `;
               $(".goods-container").html(detail);
               
     }); 
     
