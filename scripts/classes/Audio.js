class OotoriAudio {

	constructor(audioHtmlObject) {
		this.html = audioHtmlObject;
		this.html.volume = 0.5;
		this.html.play();
		return this;
	}

	// Get the actual duration of the song in seconds
	get realDuration() {
		return this.html.duration;
	}

  // Get the actual position of playback in seconds
	get realProgress() {
		if(this.html.currentTime === 0)
			return 1;

		return this.html.currentTime;
	}

	get volume() {
		return (this.html.volume*100);
	}

	set volume(volume) {
		this.html.volume = parseInt(volume)/100;
	}

  // Get the percentage of our progress through playback
	get percentagePlayed() {
		return (this.realProgress / this.realDuration).toFixed(10);
	}

	// We want to slow down proportionally with our progress through the song.
	// But due to limitations with Chrome's handling of <audio> we can go no lower than 0.5.
	// So at the very last second of the song, we'd like to be playing it at half speed.
	// This means we're effectively going to proportionally slow down a song that's twice as long instead.
	// Which means for the purposes of calculating the play rate we want, we're only half as far into the song the acutal percentage.
	// This is terrible.
	get idealCurrentPlayRate() {
		return 1-(this.percentagePlayed/1.9);
	}

	// Set the playback speed
	set playRate(rate) {
		if(rate > 0.5)
			this.html.playbackRate = rate;
	}

	// Set the playback speed to our calculated ideal value based on progress
	updatePlayRate() {
		this.playRate = this.idealCurrentPlayRate;
	}

	get displayRealDuration() {
		var minutes = parseInt(this.realDuration / 60);
		var seconds = parseInt(this.realDuration % 60).toString().padStart(2, '0');

		return minutes+':'+seconds;
	}

	get displayRealProgress() {
		var minutes = parseInt(this.realProgress / 60);
		var seconds = parseInt(this.realProgress % 60).toString().padStart(2, '0');

		return minutes+':'+seconds;
	}
}