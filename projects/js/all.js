
var html =  document.documentElement;
var screenWidth = html.clientWidth;
var timer = null;
var uiWidth = 414;
var fonts = 40;
var bili = uiWidth/fonts;
html.style.fontSize = screenWidth/bili + 'px';
getSize();
window.onresize = getSize;
function getSize(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		screenWidth = html.clientWidth;
		if(screenWidth <= 320){
			html.style.fontSize = 320/bili + 'px';
		}else if(screenWidth >= uiWidth){
			html.style.fontSize = uiWidth/bili + 'px';
		}else{
			html.style.fontSize = screenWidth/bili + 'px';
		}	
	}, 100);
}
//动态计算rem值


var Tools = {
  getParamObj: function () {
    //获取参数列表
    var search = location.search;

    //对参数进行解码  ?name=hucc&age=18&desc=帅的一匹
    search = decodeURI(search);

    //把?切掉  name=hucc&age=18&desc=帅的一匹
    search = search.slice(1);

    //把字符串切割成一个数组  ["name=hucc", "age=18", "desc=帅的一匹"]
    var arr = search.split("&");

    //遍历数组，把值存到对象中
    var obj = {}
    arr.forEach(function (e) {
      var key = e.split("=")[0];
      var value = e.split("=")[1];
      obj[key] = value;
    });

    return obj;
  },
  getParam: function (key) {
    return this.getParamObj()[key];
  }
}
//获取地址栏参数

	function render(size,data,callback) {
	$.ajax({
		type: "get",
		url: 'http://localhost:9090/api/'+size,
		data: data,
		success:callback 
            
	});
}
//	简易Ajax



