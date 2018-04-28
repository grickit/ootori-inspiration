// Grab elements we'll be manipulating frequently
var music = new OotoriAudio(document.getElementById("music"));
var outerFrame = document.getElementById("outer-frame");
var innerFrame = new OotoriImage(document.getElementById("inner-image"));
var controls = document.getElementById("controls");
var controlDuration = new OotoriPositionSlider(document.getElementById("control-duration"), document.getElementById("control-duration-current"), document.getElementById("control-duration-max"));
var controlVolume = new OotoriVolumeSlider(document.getElementById("control-volume"), document.getElementById("control-volume-current"), document.getElementById("control-volume-max"));


// Main processing loop
function main() {
	music.updatePlayRate();
	controlDuration.updatePosition(music);
	controlVolume.updatePosition(music);
	innerFrame.updateScale(music);

	if(controlsMouse === false && (Date.now() / 1000) - lastMouseMoved >= 1) {
		controls.style.display = "none";
	}
	else {
		controls.style.display = "block";
	}

}

var lastMouseMoved = (Date.now() / 1000);
var controlsMouse = false;
document.onmousemove = function(e) {
	lastMouseMoved = (Date.now() / 1000);
}

controls.onmouseover = function(e) {
	controlsMouse = true;
}

controls.onmouseout = function(e) {
	controlsMouse = false;
}


setInterval(main, 10);