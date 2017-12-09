render('getbaicaijiatitle', null, function(data) {
	//	console.log(data);
	$('.bc-nav .ul').html(template('tpl1', data));
})
var titleid=0;
render('getbaicaijiaproduct', {
		titleid: titleid
	}, function(data) {
		console.log(data);
		$('.bc-main ul').html(template('tpl2', data))
	})
$('.bc-nav .ul').on('click', 'a', function() {
	 titleid=$(this).data('titleid');
	render('getbaicaijiaproduct', {
		titleid: titleid
	}, function(data) {
		console.log(data);
		$('.bc-main ul').html(template('tpl2', data))
	})
})