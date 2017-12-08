$(function() {
	
	var s = Tools.getParam('category');
		$('#category').html(s);
	var categoryid = Tools.getParam('categoryid');	
		
		
		
		
		var pageid = 1;
	var page = 1;
	
		
	function getPage() {
		render('getproductlist',{
				categoryid: categoryid,
				pageid: pageid
			},function(data) {
				$('.main').html(template('tpl1', data))
				page = Math.ceil(data.totalCount / data.pagesize);
                 var option = '';
				for(var i = 1; i <= page; i++) {
					option += "<option " + (i == pageid ? 'selected' : '') + " value=" + i + ">" + i + "/" + page + "</option>";
				}
				$(".mid select").html(option);
			})
	}
	getPage();

	$('.pre').on('click', function() {
		$(':selected').attr('value','pageid');
		if(pageid > 1) {
			pageid--;
		}
		getPage();
		console.log(pageid);
	})
	$('.next').on('click', function() {
		$(':selected').attr('value','pageid');
		if(pageid < page) {
			pageid++;
		}
		getPage();
	})
	$('select').on('change', function() {
		pageid=$(':selected').attr('value');
		getPage();
	})

})