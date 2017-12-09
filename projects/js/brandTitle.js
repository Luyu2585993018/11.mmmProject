$(function(){
	render('getbrandtitle',null,function(data){
		console.log(data);
		$('.ph-main ul').html(template('tpl',data));
	})
	
	
	
	
	
	
})