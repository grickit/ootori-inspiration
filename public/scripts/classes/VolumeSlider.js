class OotoriVolumeSlider {

	constructor(rangeHtmlObject, currentVolumeHtmlObject, maxVolumeHtmlObject) {
		this.html = rangeHtmlObject;
		this.currentLabel = currentVolumeHtmlObject;
		this.maxLabel = maxVolumeHtmlObject;
		this.paused = false;

		// Need to reference "this" in another context
		var slider = this;
		this.html.addEventListener("mouseover", function() { slider.paused = true; });
		this.html.addEventListener("mouseout", function() { slider.paused = false; });
	}

	updatePosition(music) {
		if(this.paused === false) {
			this.html.min = 1;
			this.html.max = 100;
			this.html.value = parseInt(music.volume);

		}

		this.currentLabel.innerHTML = parseInt(music.volume);
		this.maxLabel.innerHTML = "100%";
	}

}