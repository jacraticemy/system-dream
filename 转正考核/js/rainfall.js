function rainfalljs() {
	var box = document.getElementById("weather-background-rain");
	var i = 0;
	var other = 0;

	function rainfall() { //下落方法
		var a = document.createElement("div"); //创建一个雨点
		a.style.width = Math.random() * (1 - 0.5) + 1 + 'px';
		a.style.height = Math.random() * (4 - 1) + 4 + 'px'; //定义雨的高度变化范围
		a.style.backgroundColor = "rgb(255,255,255)"; //定义雨的样式
		a.style.opacity = Math.random() * (0.5 - 0.01) + 0.01; //调节透明度
		a.className = "yu";
		a.id = "yu" + i;
		a.style.top = parseInt(box.style.height) * (Math.random() > 1 ? Math.random() : 0) + 'px';
		a.style.left = parseInt(box.style.width) * Math.random() + 'px';
		//a.style.width = parseInt(a.style.width) * Math.random() + 'px';
		box.appendChild(a); //递增节点
		falldown(a.id, a.id, 8 * Math.random()); //下落随机
		i++;
		var x = 2 * Math.random() * Math.random(); //控制雨的密度
		setTimeout('rainfall()', x);
	};

	function removeElement(_element) { //移除标签的函数
		var _parentElement = _element.parentNode;
		if(_parentElement) {
			_parentElement.removeChild(_element);
		};
	};

	function falldown(a, e, speed) {
		speed = 10;
		var a1 = document.getElementById(a);
		a1.style.top = parseInt(a1.style.top) + speed + 'px';
		if(parseInt(a1.style.top) < 250) {
			e = setTimeout("falldown(\"" + a + "\",\"" + e + "\"," + speed + ")", 20)
		} else {
			clearTimeout(e);
			removeElement(a1);
			speed = null;
			other++;
		};
	};
	rainfall();
}