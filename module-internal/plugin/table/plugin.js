//오픈나무 테이블 플러그인
//제한적으로 작동합니다
//|| 아 || 아 || 와 같은 한줄 테이블만 지원됩니다.
//마지막 테이블 개체는 깨지는 오류가 있습니다
//또한 한 문서내에 여러개의 분리된 테이블 객체가 있을시
//제 기술의 부재로 모두 합쳐지게됩니다

module.exports = function(six){
	var onetable=/\|\|\s?([^\n]*)\s/g;
	var onetable2=/\|\|\s/g;
	var twotable=/\|\|\s?([^\n]*)\s\|\|/g;
	var param = six.replace(twotable, "$1");
	var loop = 1;
	var paramarray = param.split("||");

	var paramlen = paramarray.length;
	var realparam = paramarray;
	paramarray = paramarray.toString().replace(/\<\<br\>?([^\n]*)\s\<br\>/g,"$1");
	paramarray = param+",<a></a>".split(",");
	paramarray2 = param.split("\n");
	six = six.replace(twotable, "<div class=\"table\"><table class=\"wiki-table\"><tbody><identifier>");

	for(loop = 1; loop< paramlen;loop++){
		six = six.replace("<identifier>","<td><p>"+realparam[loop]+"</p></td><identifier>");
	}

	six = six.replace("<identifier>","</tbody><table></div>");

	return six;
}

