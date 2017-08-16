function canvasjs (){
	var canvas1 = document.getElementById('weather_xlon-canvas');
	var context1 = canvas1.getContext('2d');//获取上下文
	
	context1.beginPath(); 
	
	context1.lineWidth = 1;
	context1.strokeStyle = 'rgba(255,255,255,0.5)';
  
	context1.moveTo(0,12);   
	context1.lineTo(480,12);   
	//context1.stroke(); 
	 
	context1.moveTo(0,30);   
	context1.lineTo(480,30);
	//context1.stroke(); 
	  
	context1.moveTo(0,48);   
	context1.lineTo(480,48);
	//context1.stroke();
	   
	context1.moveTo(0,66);   
	context1.lineTo(480,66);
	//context1.stroke();
	  
	context1.moveTo(0,84);   
	context1.lineTo(480,84);
	context1.closePath();
	context1.stroke();
	
	
	context1.beginPath();
	context1.lineWidth = 1;
	context1.strokeStyle = 'rgba(255,255,255,1)';
	
	context1.moveTo(0,53);   
	context1.lineTo(17,53);  
	context1.lineTo(70,50); 
	context1.lineTo(125,57);  
	context1.lineTo(180,62);  
	context1.lineTo(240,62);   
	context1.lineTo(295,54);   
	context1.lineTo(350,46); 
	context1.lineTo(405,42); 
	context1.lineTo(462,46); 
	context1.lineTo(480,46);
	context1.moveTo(480,84); 
	context1.lineTo(0,84);
	//context1.closePath();
	context1.stroke();
	
	context1.beginPath();
	context1.lineWidth = 1.4;
	//context1.strokeStyle = 'rgba(255,255,255,0)';
	context1.fillStyle = 'rgba(255,255,255,0.2)';
	
	context1.moveTo(0,53);   
	context1.lineTo(17,53);  
	context1.lineTo(70,50); 
	context1.lineTo(125,57);  
	context1.lineTo(180,62);  
	context1.lineTo(240,62);   
	context1.lineTo(295,54);   
	context1.lineTo(350,46); 
	context1.lineTo(405,42); 
	context1.lineTo(462,46); 
	context1.lineTo(480,46);
	context1.lineTo(480,84);
	context1.lineTo(0,84);
	context1.lineTo(0,53);
	context1.closePath();
	context1.fill();

	var canvas2 = document.getElementById('weather_xlon-canvas-2');
	var context2 = canvas2.getContext('2d');
	
	context2.beginPath(); 
	
	context2.lineWidth = 1;
	context2.strokeStyle = 'rgba(255,255,255,0.5)';
  
	context2.moveTo(0,12);   
	context2.lineTo(480,12);   
	 
	context2.moveTo(0,30);   
	context2.lineTo(480,30);
	  
	context2.moveTo(0,48);   
	context2.lineTo(480,48);
	   
	context2.moveTo(0,66);   
	context2.lineTo(480,66);
	  
	context2.moveTo(0,84);   
	context2.lineTo(480,84);
	context2.closePath();
	context2.stroke();
	

	context2.beginPath();
	context2.lineWidth = 1.4;
	context2.strokeStyle = 'rgba(255,255,255,1)';
	context2.moveTo(17,66);   
	context2.lineTo(71,82);
	context2.lineTo(465,82); 
	//context2.lineTo(17,53);
	context2.stroke();
	context2.closePath();
} 