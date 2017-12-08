$(function(){
	var productid =Tools.getParam('productid');
	render('getdiscountproduct',{
		productid :productid 
	},function(data) {
						console.log(data);
			$('.prod').html(template('tpl', data));
			$('.talk').html(template('tpl1', data));
			
		})
	
	
})