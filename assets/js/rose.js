class Rose {
  _x = 670;
  _y = 525;
  _image;
  // _imageLocation = './assets/img/cab1.png';

  constructor() {
    console.log('Rose:constructor');
    this._loadImage();
  }

  _loadImage() {
    console.log('Rose:_loadImage');
    this._image = new Image();
    this._image.onload = () => {
      this._draw();
    };
    this._image.src = this._imageLocation;
  }
  _draw() {
    console.log('Rose:_draw');

    ctx.beginPath();
    ctx.drawImage(this._image, this._x, this._y);
  }
}
