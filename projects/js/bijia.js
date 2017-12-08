$(function() {
	var productid = Tools.getParam('productid');
	render('getproduct', {
		productid: productid
	}, function(data) {
		$('.product').html(template('tpl1', data))
		$("#category").text(data.result[0].productName.split(" ")[0]);
		$(".num").text(Tools.getParam("comment"));
	})

	var categoryId = Tools.getParam('categoryId');
	render('getcategorybyid', {
		categoryid: categoryId
	}, function(data) {
		$('.two').html(template('tpl2', data))
	})
	render('getproductcom', {
		productid: productid
	}, function(data) {
		console.log(data);
		$('.discuss ul').html(template('tpl3', data))
	})
})