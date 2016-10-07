<!-- hide script from old browsers
$(document).ready(function() {
   var $grid = $("#main");
   var height = 16;
   var blockColor = "black";
   newgrid(height);

   $(document).on("mouseenter", ".square", function() {
	$(this).css({"background-color": blockColor});
});
 
   $("#reset").on("click", function() {
	var num = prompt("How many squares per column? (1-64)");
	if (num > 0 && num < 65) {
		newgrid(num);
	}
	else {
		alert("You must enter a number between 1 and 64");
	}
});	
   $("#clear").on("click", function() {
	clear();
});
   $("#colorChange").on("click", function() {
	$("#colorDrop").toggleClass("show");
});
   $("#black").on("click", function() {
	blockColor = "black";
});
   $("#blue").on("click", function() {
	blockColor = "blue";
});
   $("#red").on("click", function() {
	blockColor = "red";
});
   $("#green").on("click", function() {
	blockColor = "green";
});
   $("#random").on("click", function() {
	blockColor = getRandomColor;
});
   window.onclick = function(event) {
	if (!event.target.matches("#colorChange")) {
		$("#colorDrop").removeClass("show");
	}
}

   function newgrid(h) {
	$($grid).empty();
   	for (var i=0; i < h; i++) {
	var row = '<div>';
		for (var j=0; j < h; j++) {
	   	row += '<div class="square"></div>';
}
	row += '</div>';
	$grid.append(row);
}
	$(".square").height((600-2*h)/h).width((600-2*h)/h);
}
   function clear() {
	$(".square").css({"background-color": "white"});
}

   function getRandomColor() {
	var ranColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return ranColor
}
});
-->


