
var couponid=Tools.getParam('couponid');
//console.log(couponid);
render('getcouponproduct',{couponid:couponid},function(data){
	console.log(data);
	$('.yhxq-main ul').html(template('tpl',data))
})
$('.yhxq-main ul').on('click','a',function(){
	$('.mask').addClass('mui-backdrop');
	$('.mask img').css('display','block').addClass('center')
})


$.ajax({
	type:"get",
	url:"http://localhost:8020/api/getcouponproduct",
	async:true,
	data:{couponid:couponid},
	success:function(data){
	console.log(data);
	$('.yhxq-main ul').html(template('tpl',data))
}
});