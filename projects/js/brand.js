$(function() {

	var brandTitle = Tools.getParam('brandTitle');
	$('#category').text(brandTitle);
	$('.tit').text(brandTitle);

	var brandtitleid = Tools.getParam('brandtitleid');
	render('getbrand', {
		brandtitleid: brandtitleid
	}, function(data) {
//		console.log(data);
		$('.ph-main ul').html(template('tpl', data))
	})
	
	
	render('getbrandproductlist', {
	brandtitleid: brandtitleid,
	pagesize: 4
}, function(data) {
//	console.log(data);
	$('.main').html(template('tpl1', data))
})
	
		render('getproductcom', {
		productid: 0
	}, function(data) {
//		console.log(data);
		$('.discuss ul').html(template('tpl3', data))
	})
	
	
})


