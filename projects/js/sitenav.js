render('getsitenav',null,function(data){
	console.log(data);
	$('.nav-main .net').html(template('tpl',data))
})