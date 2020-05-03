class Button {
  _x;
  _y = 77;
  _image;
  _imageLocation = './assets/img/left-button.png';

  constructor(theX) {
      this._x=theX;
      if (this._x == 967) {
          this._imageLocation="./assets/img/right-button.png"
      }


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
    // drawImage(image, dx, dy, dWidth, dHeight);

    ctx.drawImage(this._image, this._x, this._y);
  }

  tick() {
    this._draw();
  }
}
