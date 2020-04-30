class Cabinet {
  _x = 670;
  _y = 525;
  _image;
  _imageLocation = './assets/img/cab.png';
  _spriteWidth = 223;
  _spriteHeight = 152;
  _spriteFrames = 2;
  _currentFrame = 0;

  constructor() {
    console.log('Cab:constructor');
    this._loadImage();
  }

  _loadImage() {
    console.log('Cab:_loadImage');
    this._image = new Image();
    this._image.onload = () => {
      this._draw();
    };
    this._image.src = this._imageLocation;
  }
  _draw() {
    console.log('Cab:_draw');
    // if (onclick) {
    //   this._currentFrame += 1;
    // }

    const spriteX = this._spriteWidth * this._currentFrame;
    ctx.beginPath();
    ctx.drawImage(
      this._image,
      spriteX,
      0,
      this._spriteWidth,
      this._spriteHeight,
      this._x,
      this._y,
      this._spriteWidth,
      this._spriteHeight
    );
  }

  // _openCab() {
  //   console.log('Cab:open');
  // }

  tick(timestamp) {
    this._draw();
  }
}
