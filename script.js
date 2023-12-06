let currImg = document.getElementById("img");
let everything = document.getElementById("everything");
let index = 1;
let playButton = document.querySelector("svg");

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

var images = new Array(26);
for (let i = 0; i < images.length; i++) {
	images[i] = (i + 1) + "img";
}
shuffle(images);

var songs = ['hawaii 78.mp3', 'hawaii 78 introduction.mp3'];

shuffle(images);
shuffle(songs);

// setInterval(changePhoto(arr),1000);

playButton.addEventListener("click", function(e) {
	playButton.style.display = "none";
	var audio = new Audio([songs[0]]);
	audio.play();
	audio.loop = true;
	changePhoto(images);
});

playButton.addEventListener("keypress", function(e) {
	playButton.style.display = "none";
	var audio = new Audio([songs[0]]);
	audio.play();
	audio.loop = true;
	changePhoto(images);
});

// change the photo shown every 2 secs
function changePhoto(array) {
	let newImg = document.querySelector(".hidden");
	let oldImg = document.querySelector(".show");

	newImg.src = "images/" + array[(index + 1) % array.length] + ".jpeg";

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
	newImg.className = 'show';
	oldImg.className = "hidden"

	index++;
	setTimeout(function(){changePhoto(array);},5500);
}