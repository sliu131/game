class Water {
  x = 508;
  y = 477;

  _image;
  _imageLocation = './assets/img/water.png';

  constructor(x, y) {
    this._loadImage();
  }

  _loadImage() {
    this._image = new Image();
    this._image.onload = () => {
      this._draw();
    };
    this._image.src = this._imageLocation;
  }
  _draw() {
    ctx.beginPath();
    ctx.drawImage(this._image, this.x, this.y);
  }

  tick(timestamp) {
    this._draw();
  }
}
