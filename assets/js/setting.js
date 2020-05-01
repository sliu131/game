class Setting {
  _x = 0;
  _y = 0;
  _image;
  _imageLocation = './assets/img/background.png';
  bag;

  constructor() {
    console.log('Set:constructor');
    this._loadImage();
    this.loadBagImage();
  }

  _loadImage() {
    console.log('Set:_loadImage');
    this._image = new Image();
    this._image.onload = () => {
      this._draw();
    };
    this._image.src = this._imageLocation;
  }

  loadBagImage() {
    console.log('Set:_loadBagImage');
    this.bag = new Image();
    this.bag.onload = () => {
      this.drawBag();
    };
    this.bag.src = './assets/img/bag-place.png';
  }

  _draw() {
    ctx.beginPath();
    // drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(this._image, this._x, this._y);
  }
  drawBag() {
    ctx.beginPath();
    ctx.drawImage(this.bag, 1045, 76);
  }

  tick() {
    this._draw();
    this.drawBag();
  }
}
