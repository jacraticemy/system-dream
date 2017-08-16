function changejs() {
        var oUl1 = document.getElementById("ul1"); //获取列表的id
        var aLi = oUl1.getElementsByTagName("li");  //获取列表
        var oDiv = document.getElementById("tab-list");//找到父节点
        var aDiv = oDiv.getElementsByTagName("div");//父节点之下的div切换
        for(var i = 0; i < aLi.length; i++) {//遍历
            aLi[i].index = i;//节点顺序数
            aLi[i].onmouseover = function() {
                for(var j = 0; j < aDiv.length; j++) {
                    aDiv[j].className = "hide";//循环设置为隐藏
                }	
              aDiv[this.index].className = "show";
            }
            
          aLi[i].onmouseout = function(){
          	aDiv[this.index].className = "hide";
          }  
        }
        
        
    }
    
    