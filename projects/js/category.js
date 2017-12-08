$(function() {
	render('getcategorytitle', null, function(data) {
		//			console.log(data);
		$('.main ul').html(template('tpl', data))
	})
	$('.main ul').on('tap', 'li', function() {
		var id = $(this).data('id');
		var that = $(this).find('.sort')
		render('getcategory', {
			titleid: id
		}, function(data) {
			//				console.log(data);
			var html = template('tpl1', data);
			that.html(html);
		})
	})
})