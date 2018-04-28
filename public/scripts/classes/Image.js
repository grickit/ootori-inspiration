class OotoriImage {
  constructor(imageHtmlObject) {
    this.html = imageHtmlObject;
    this.currentScale = 1;
    this.imageURL = 'images/ootori_giant.jpg';
  }

  updateScale(music) {
    this.currentScale = 1+parseFloat(music.percentagePlayed*4);

    this.html.style.backgroundImage = "url('"+this.imageURL+"')";
    this.html.style.transform = "scale("+this.currentScale+")";
  }
}