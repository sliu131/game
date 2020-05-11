class Scene2 {
  _x = 55;
  _y = 75;
  _image;
  _imageLocation = './assets/img/scene2.png';
  cabinet;

  constructor() {
    console.log('Scene2:constructor');
    this.button = new Button(967);
    this.cabinet = new Cabinet();
    this.rose = new Rose();
    this._loadImage();
  }

  _loadImage() {
    console.log('Scene2:_loadImage');
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
    this.cabinet.tick();
  }
}
