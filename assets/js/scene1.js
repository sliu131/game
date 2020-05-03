class Scene1 {
  _x = 55;
  _y = 75;
  _image;
  _imageLocation = './assets/img/scene1.png';

  constructor() {
    console.log('Scene1:constructor');
    this.button = new Button(55);

    this._loadImage();
  }

  _loadImage() {
    console.log('Scene1:_loadImage');
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
    this.button.tick();
  }
}
