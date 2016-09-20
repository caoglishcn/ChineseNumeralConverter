(function(window) {
	var cnumlist = ['零', "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
	var ctenlist = {
		"100": "百",
		"1000": "千",
		"10000": "万",
		"100000000": "亿"
	};
	var converter = window.chineseNumeralconverter = {};

	converter.processLessThan10k=function(num){
		var origin = num;
		var result = "";
	
		for (var tenIndex=10000;tenIndex>10;tenIndex=tenIndex/10) {
			if (num >= tenIndex) {
				carry = parseInt(num / tenIndex);
				result += cnumlist[carry] + ctenlist[tenIndex];
				num -= carry * tenIndex;

				if (origin % tenIndex < (tenIndex / 10) && origin > tenIndex) {
					if (result[result.length - 1] != cnumlist[0]) {
						result += cnumlist[0];
					}
				}
			}
		}

		if (num >= 10) {
			ten = parseInt(num / 10);
			result += (ten > 1 ? cnumlist[ten] : "") + cnumlist[10];
			num -= ten * 10;
		}
		if (num === 0) return result;
		result += cnumlist[num];
		return result;
	}

	converter.convert = function(num) {
		
		num = parseInt(num,10)
		if (num === 0) return cnumlist[0];
		var chnNum="";


		var changeNameSystemValueIn10k=10000;

		var restNum= num%changeNameSystemValueIn10k;

		var processNum=parseInt(num/changeNameSystemValueIn10k,10);

		if(processNum>0){
			var num1 = this.processLessThan10k(processNum);
			chnNum= num1+ctenlist[changeNameSystemValueIn10k];
			console.log(processNum,num1);
		}

		if(restNum>0){
			var num2 = this.processLessThan10k(restNum);
			if(processNum>0&&restNum*10<changeNameSystemValueIn10k){
				chnNum += cnumlist[0];
			}
			chnNum +=  num2;
		}
		return chnNum;
	}

})(window);