window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById("start");
	startButton.onclick = startGame
}

function startGame(){
	alert("เริ่มได้");
	timeStart();
    addBox();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; 
	var second = min*60; 
	var showclock = document.getElementById('clock');

	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		console.log(allbox.length);
		
		second = second - 1;
		showclock.innerHTML =second; 

		
		if(allbox.length == 0 && second > 0 ){ 	
			alert("คุณชนะ ใช้เวลาไป "+ (30-second) +" วินาที");
			clearInterval(timer);
		}

		
		else if(allbox.length > 0 && second == 0 ){
			alert("คุณแพ้แล้ว");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox(){  
	var numbox = document.getElementById("numbox").value; 
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;

		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";

		tempbox.style.backgroundColor = colorDrop

		gameLayer.appendChild(tempbox); 

		bindBox(tempbox);
	}
}

function bindBox(box){ 
	var gameLayer = document.getElementById("game-layer");

	box.onclick = function(){
		gameLayer.removeChild(box) 
	}
}

function clearScreen(){
	var gameLayer = document.getElementById("game-layer");
	var allbox = document.querySelectorAll("#game-layer div");

	for (var i=0;i<allbox.length;i++){
		gameLayer.removeChild(allbox[i])
	}
}