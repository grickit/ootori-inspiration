class OotoriPositionSlider {

	constructor(rangeHtmlObject, currentTimeHtmlObject, maxTimeHtmlObject) {
		this.html = rangeHtmlObject;
		this.currentLabel = currentTimeHtmlObject;
		this.maxLabel = maxTimeHtmlObject;
		this.paused = false;

		// Need to reference "this" in another context
		var slider = this;
		this.html.addEventListener("mouseover", function() { slider.paused = true; });
		this.html.addEventListener("mouseout", function() { slider.paused = false; });
	}

	// Set values of the slider based on our progress through the song.
	// Also update the labels.
	updatePosition(music) {
		if(this.paused === false) {
			this.html.min = 1;
			this.html.max = music.realDuration;
			this.html.value = music.realProgress;

		}

		this.currentLabel.innerHTML = music.displayRealProgress;
		this.maxLabel.innerHTML = music.displayRealDuration;
	}

}