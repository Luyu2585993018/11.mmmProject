
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
$('body').on('click','.mask',function(){
	$('.mask').removeClass('mui-backdrop');
	$('.mask img').css('display','none').removeClass('center')
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