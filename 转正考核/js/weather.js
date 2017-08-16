function weatherjs() {
	var timer = null;

	var weatherOli = document.getElementById('weather-bottom');
	var weatherAli = weatherOli.getElementsByClassName('weather-bottom-li');
	var weatherOli = document.getElementById("tab-list"); //找到父节点
	var weatherADiv = weatherOli.getElementsByClassName("weather-div"); //父节点之下的div切换
	var weatherAli2 = document.getElementsByClassName('weather-week');
	var weatherOli2 = document.getElementById('weather-background');
	var weatherADiv2 = weatherOli2.getElementsByTagName('div');
	var weatherTool = document.getElementById('weather-tools');
	var weatherTool2 = document.getElementsByClassName('weather-nums-searchtools');
	var weatherInner = document.getElementById('weather-head-nums-inner');
	for(var i = 0; i < weatherAli2.length; i++) {
		weatherAli2[i].index = i;
		weatherAli2[i].onmouseenter = function() {

			for(var j = 0; j < weatherADiv2.length; j++) {
				weatherADiv2[j].style.opacity = 0;
				//				WeatherChangeColor(weatherADiv2[j],-0.1,0);
			}
			WeatherChangeColor(weatherADiv2[this.index], 0.1, 1);
		};
		weatherAli2[i].onmouseleave = function() {
			WeatherChangeColor(weatherADiv2[this.index], -0.1, 0);
			//weatherADiv2[this.index].style.opacity = 0;
			weatherADiv2[3].style.opacity = 1;
		};
		weatherAli2[3].onmouseleave = function() {
			weatherADiv2[3].style.opacity = 1;
		}
	}

	for(var i = 0; i < weatherAli.length; i++) {
		weatherAli[i].index = i;
		weatherAli[i].onclick = function() {
			for(var i = 0; i < weatherAli.length; i++) {
				weatherAli[i].style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
			}
			this.style.backgroundColor = 'rgba(255, 255, 255, 0)';
			for(var j = 0; j < weatherADiv.length; j++) {
				weatherADiv[j].style.display = 'none';
			}
			weatherADiv[this.index].style.display = 'block';
		}
	}
	
	weatherTool.onclick = function () {
		WeatherChangePosition(weatherInner,-6,-42);
	}
	
	weatherTool2[0].onclick = function () {
		WeatherChangePosition(weatherInner,6,0);
	}

	function WeatherChangeColor(ele, speed, target) {
		var alpha = 0;
		clearInterval(timer);
		timer = setInterval(function() {
			if(ele.style.opacity == target) {
				clearInterval(timer);
			} else {
				alpha += speed;
				if(alpha < 0) {
					alpha = 0;
				} else if(alpha > 1) {
					alpha = 1;
				}
				ele.style.opacity = alpha;
			}
		}, 30)
	}　

	function WeatherChangePosition(ele,speed, target) { //定义运动函数
		clearInterval(timer); //每次调用函数的时候先清除定时器
		timer = setInterval(function() { //定时器函数
			if(ele.offsetTop== target) {
				clearInterval(timer); //当达到目标值的时候，清空定时器
			} else {
				ele.style.top = ele.offsetTop + speed + 'px';
			}
		}, 30)
	}
}