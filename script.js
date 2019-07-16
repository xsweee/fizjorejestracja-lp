window.addEventListener("load", function(){
	 dlaKogo	=	document.getElementById("dlaKogo"),
	 jakDziala 	=	document.getElementById("jakDziala"),
	 oNas 		=	document.getElementById("oNas"),
	 kontakt 	=	document.getElementById("kontakt"),
	 oplaty		=	document.getElementById("oplaty"),
	 logo 		=	document.getElementById("logo"),
	 rek 		=	document.getElementById("rekomendacje");

	dlaKogo.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/dla-kogo.htm";});
	jakDziala.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/jak-dziala.htm";});
	oNas.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/o-nas.htm";});
	kontakt.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/kontakt.htm";});
	oplaty.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/oplaty.htm";});
	logo.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/index.htm";});
	rek.addEventListener("click", ()=>{document.location.href = "file:///C:/Users/kryst/Desktop/fizjorejestracja/fizjorejestracja/rekomendacje.htm";});
	move();
	window.setInterval(function(){
		for (var i = document.getElementsByClassName("carousel_item").length - 1; i >= 0; i--) {
			move();
			document.getElementsByClassName("carousel_item")[i].style.transform="translate(-80%)";
		}
		setTimeout(function(){
			for (var i = document.getElementsByClassName("carousel_item").length - 1; i >= 0; i--) {
				move();
				document.getElementsByClassName("carousel_item")[i].style.transform="translate(0)";
			}
		}, 8000);
	}, 16000);

	var counters = document.getElementsByClassName('counter');
	var countersQuantity = counters.length;
	var counter = [];

	for (i = 0; i < countersQuantity; i++) {
		counter[i] = parseInt(counters[i].innerHTML);
	}

	var count = function(start, value, id) {
		var localStart = start;
		setInterval(function() {
		if (localStart < value) {
			localStart+=10;
			counters[id].innerHTML = localStart;
		}
		}, 1);
	}

	for (j = 0; j < countersQuantity; j++) {
		count(0, counter[j], j);
	}
});

function move(){
	var elem = document.getElementById("progress_bar");
	width = 1;
	id = setInterval(frame, 100);
	function frame() {
	if (width >= 100) {
		clearInterval(id);
	} else {
		width++; 
		elem.style.width = width + '%'; 
		}
	}
}


