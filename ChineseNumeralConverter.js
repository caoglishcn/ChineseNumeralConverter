(function(window) {
	var cnumlist = ['零', "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
	var ctenlist = {
		"100": "百",
		"1000": "千",
		"10000": "万",
		"100000000": "亿"
	};
	var converter = window.chineseNumeralconverter = {};

	converter.convert = function(num) {
		var origin = num;
		var result = "";

		if (num === 0) return cnumlist[0];

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

})(window);