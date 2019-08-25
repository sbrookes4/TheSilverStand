//alert('test');

var i = 0;
var image = document.getElementById("sliderImage");
var time = 10000;

function changeImage(){

	//console.log(i);
	//console.log(image);
	if(i < 5){
		i++;
	}else{
		i = 1;
	}
	image.src = 'COMPONENTS/SLIDESHOW/SlideShowImages/zWHEAT_' + i + '.png';

	//setTimeout("changeImage()", time);
}

function scrollThroughRight(){
	if(i < 5){
		i++;
	}else{
		i = 1;
	}
	image.src = 'COMPONENTS/SLIDESHOW/SlideShowImages/zWHEAT_' + i + '.png';
}

function scrollThroughLeft(){
	if(i > 1){
		i--;
	}else{
		i = 5;
	}
	image.src = 'COMPONENTS/SLIDESHOW/SlideShowImages/zWHEAT_' + i + '.png';
}


window.onload = changeImage();






