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

		if (num >= 10000) {
			hundred = parseInt(num / 10000);
			result += cnumlist[hundred] + ctenlist['10000'];
			num -= hundred * 10000;

			if (origin % 10000 < 1000 && origin > 10000) {
				if (result[result.length - 1] != cnumlist[0]) {
					result += cnumlist[0];
				}
			}
		}

		if (num >= 1000) {
			hundred = parseInt(num / 1000);
			result += cnumlist[hundred] + ctenlist['1000'];
			num -= hundred * 1000;

			if (origin % 1000 < 100 && origin > 1000) {
				if (result[result.length - 1] != cnumlist[0]) {
					result += cnumlist[0];
				}
			}
		}

		if (num >= 100) {
			hundred = parseInt(num / 100);
			result += cnumlist[hundred] + ctenlist['100'];
			num -= hundred * 100;

			if (origin % 100 < 10 && origin > 100) {
				if (result[result.length - 1] != cnumlist[0]) {
					result += cnumlist[0];
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