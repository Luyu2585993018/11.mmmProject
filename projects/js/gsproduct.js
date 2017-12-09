$(function(){
	render('getgsshop',null,function(data){
//		console.log(data);
		$('.shop').html(template('tpl',data));
	})
	render('getgsshoparea',null,function(data){
//		console.log(data);
		$('.area').html(template('tpl1',data));
	})
	
	var areaid=0;
	var shopid=0;
	render('getgsproduct',{shopid:shopid ,
	areaid:areaid},function(data){
//		console.log(data);
		$('.cd-main ul').html(template('tpl2',data))
		
	})
	$('select').on('change',function(){
		areaid=$('.area :selected').attr('value');
	shopid=$('.shop :selected').attr('value');
//	console.log(shopid,areaid);
render('getgsproduct',{shopid:shopid ,
	areaid:areaid},function(data){
//		console.log(data);
		$('.cd-main ul').html(template('tpl2',data))
	})
	})
	
	
	
})