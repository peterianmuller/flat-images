var body = document.querySelector('body')
var imageContainer = document.querySelector('#image-container');
var imageURL = "https://assets.imgix.net/unsplash/mountains.jpg?"
var img = document.createElement("IMG");

// create onclick event listener on .example-text and make the images show/hide
// 

let exampleTextElements = document.querySelectorAll('.example-text');
console.log(exampleTextElements);

exampleTextElements.forEach((el, i)=>{
	el.addEventListener('click', ()=>{
		let img = el.previousSibling.previousSibling;
		if (!img.classList.contains('show')) {
			img.classList.add('show');
		} else {
			img.classList.remove('show');
		}	
	}); 
});

// we aren't adding any new weird attributes, we're just appending the 
// src attribute of the img element 

var buildURLString = function(color, text) {
	// if there is no text entered we just want the regular image

	if (text) {
		// need to add %20 after each word to represent a space
		var textArr = text.split(' ');
		var textArrLength = textArr.length;
		textArr = textArr.map((string,index)=>{
			if (index < textArrLength - 1) {
				return string += '%20';
			} else {
				return string;
			}
		}).join('');

		imageURL += '?txt=' + textArr + "&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48";	 
	} 

	if (color) {
		 imageURL += '&blend=' + color + "&bm=normal&balph=50";	
	}

	return imageURL;
}


var showImage = function() {
	var color = document.querySelector('#color-overlay').value;
	color = color.slice(1);
	var text = document.querySelector('#text-overlay').value;
	img.src = buildURLString(color, text);
	body.appendChild(img);
	imageURL = "https://assets.imgix.net/unsplash/mountains.jpg";
}