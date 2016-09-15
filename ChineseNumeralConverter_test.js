var cnc = chineseNumeralconverter;
QUnit.test("less than 10", function(assert) {
	var list = ['零', "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
	for (index in list) {
		var result = cnc.convert(index);
		assert.equal(result,list[index],  list[index] + " is same as " + result);
	}

});


QUnit.test("10-100", function(assert) {
	var result;
	var expect ;
	result = cnc.convert(11);
	expect ="十一";
	assert.equal(result,expect , expect);

	result = cnc.convert(14);
	expect ="十四";
	assert.equal(result,expect , expect);

	result = cnc.convert(29);
	expect ="二十九";
	assert.equal(result,expect , expect);


	result = cnc.convert(20);
	expect ="二十";
	assert.equal(result,expect , expect);

	result = cnc.convert(30);
	expect ="三十";
	assert.equal(result,expect , expect);

	result = cnc.convert(99);
	expect ="九十九";
	assert.equal(result,expect , expect);

	result = cnc.convert(100);
	expect ="一百";
	assert.equal( result,"一百", "一百");


});


QUnit.test("101-999", function(assert) {

	result = cnc.convert(104);
	expect ="一百零四";
	assert.equal(result,expect , expect);

	result = cnc.convert(114);
	expect ="一百十四";
	assert.equal(result,expect , expect);


	result = cnc.convert(504);
	expect ="五百零四";
	assert.equal(result,expect , expect);

	result = cnc.convert(919);
	expect ="九百十九";
	assert.equal(result,expect , expect);


	result = cnc.convert(999);
	expect ="九百九十九";
	assert.equal(result,expect , expect);


	
});


QUnit.test("1000-9999", function(assert) {

	result = cnc.convert(1000);
	expect ="一千";
	assert.equal(result,expect , expect);

	result = cnc.convert(1001);
	expect ="一千零一";
	assert.equal(result,expect , expect);

	result = cnc.convert(1011);
	expect ="一千零十一";
	assert.equal(result,expect , expect);

	result = cnc.convert(1104);
	expect ="一千一百零四";
	assert.equal(result,expect , expect);

	result = cnc.convert(1114);
	expect ="一千一百十四";
	assert.equal(result,expect , expect);


	result = cnc.convert(4504);
	expect ="四千五百零四";
	assert.equal(result,expect , expect);

	result = cnc.convert(9919);
	expect ="九千九百十九";
	assert.equal(result,expect , expect);


	result = cnc.convert(9999);
	expect ="九千九百九十九";
	assert.equal(result,expect , expect);


	
});


QUnit.test("10000-99999", function(assert) {

	result = cnc.convert(10000);
	expect ="一万";
	assert.equal(result,expect , expect);

	result = cnc.convert(10001);
	expect ="一万零一";
	assert.equal(result,expect , expect);

	result = cnc.convert(10011);
	expect ="一万零十一";
	assert.equal(result,expect , expect);

	result = cnc.convert(10104);
	expect ="一万零一百零四";
	assert.equal(result,expect , expect);

	result = cnc.convert(11104);
	expect ="一万一千一百零四";
	assert.equal(result,expect , expect);


	result = cnc.convert(48574);
	expect ="四万八千五百七十四";
	assert.equal(result,expect , expect);

	result = cnc.convert(97198);
	expect ="九万七千一百九十八";
	assert.equal(result,expect , expect);


	result = cnc.convert(99999);
	expect ="九万九千九百九十九";
	assert.equal(result,expect , expect);


	
});