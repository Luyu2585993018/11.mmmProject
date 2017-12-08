
	var pageid = 0;
	var page = 1;
	function getPage() {
		render('getmoneyctrl',{
				pageid: pageid
			},function(data) {
				$('.main').html(template('tpl1', data))
				page = Math.ceil(data.totalCount / data.pagesize);
                 var option = '';
				for(var i = 0; i <= page-1; i++) {
					option += "<option " + (i == pageid ? 'selected' : '') + " value=" + i + ">" + (i+1) + "/" + page + "</option>";
				}
				$(".mid select").html(option);
			})
	}
	getPage();

	$('.pre').on('click', function() {
		pageid = $(':selected').attr('value');
		if(pageid > 0) {
			pageid--;
		}
		getPage();
		console.log(pageid);
	})
	$('.next').on('click', function() {
		$(':selected').attr('value','pageid');
		if(pageid < page-1) {
			pageid++;
		}
		console.log(pageid);
		getPage();
	})
	$('select').on('change', function() {
		pageid=$(':selected').attr('value');
		getPage();
	})