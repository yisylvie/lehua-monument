let currImg = document.getElementById("img");
let everything = document.getElementById("everything");
let index = 1;
let songIndex = 0;
let playButton = document.querySelector("#play");
let uaMau = document.getElementById("uaMau");
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let images = new Array(26);
for (let i = 0; i < images.length; i++) {
	images[i] = (i + 1) + "img";
}
shuffle(images);

let songs = ['hawaii 78.mp3', 'hawaii 78 introduction.mp3'];

shuffle(images);
shuffle(songs);

// setInterval(changePhoto(arr),1000);

playButton.addEventListener("click", function(e) {
	play();
});

playButton.addEventListener("keypress", function(e) {
	play();
});

uaMau.addEventListener("click", function(e) {
	play();
});

uaMau.addEventListener("keypress", function(e) {
	play();
});

function play(){
	uaMau.classList.add("off");
	playButton.classList.add("off");
	var audio = new Audio([songs[(songIndex) % songs.length]]);
	audio.play();
	// audio.loop = true;
	let timer = changePhoto(images);
	audio.addEventListener("ended", function(){
		clearTimeout(timer);
		audio.currentTime = 0;
		console.log("ended");
		document.querySelectorAll("img.show").forEach(element => {
			element.className = "hidden";
		});
		uaMau.classList.remove("off");
   	});
	songIndex++;
}

// change the photo shown every 2 secs
function changePhoto(array) {
	let newImg = document.querySelector("img.hidden");
	let oldImg = document.querySelector("img.show");

	newImg.src = "images/" + array[(index + 1) % array.length] + ".jpeg";

	newImg.onload = loadingDone; 
	// document.querySelector("hidden").classList.remove("hidden").classList.add("show")
	// newImg.id = "img";
	// newImg.className = "hidden"

	// window.getComputedStyle(newImg).opacity; // added
	// window.getComputedStyle(oldImg).opacity; // added

	// document.getElementById("img").remove()
	// bro = array[array.length-1 % index];

	// var e = document.createElement('div');
// e.className = 'box e';
// document.getElementById('wrapper').appendChild(e);
	function loadingDone() {
		// console.log(newImg.src);
		oldImg.className = "hidden"

		if (newImg != null) {
			newImg.className = 'show';
		}

		if (oldImg != null) {
			oldImg.className = "hidden";
		}

		index++;
		return setTimeout(function(){changePhoto(array);},5800);
	}
}