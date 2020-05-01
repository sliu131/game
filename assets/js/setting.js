class Setting {
  _x = 0;
  _y = 0;
  _image;
  _imageLocation = './assets/img/bag-place.png';
  bag;

  constructor() {
    console.log('Set:constructor');
    this._loadImage();
  }

  _loadImage() {
    console.log('Set:_loadImage');
    this._image = new Image();
    this._image.onload = () => {
      this._draw();
    };
    this._image.src = this._imageLocation;
  }

  _draw() {
    ctx.beginPath();
    ctx.fillStyle = '#D5F4FF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw Bag
    ctx.beginPath();
    ctx.drawImage(this._image, 1045, 76);
  }

  tick() {
    this._draw();
  }
}
