render('getinlanddiscount',null,function(data){
	console.log(data);
	$('.gn-main ul').html(template('tpl',data));
})