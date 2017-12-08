$(function() {
	render('getindexmenu', null, function(data) {
		//			console.log(data);
		$('.meau').html(template('tpl', data))
	})
	$('.meau').on('click', '.more', function(e) {
		e.preventDefault();
		$('.meau').toggleClass('Height');
	})
	render('getmoneyctrl', null, function(data) {
		console.log(data);
		$('.main').html(template('tpl1', data))
	})
})