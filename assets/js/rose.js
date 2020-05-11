class Rose {
  x = 400;
  y = 240;
  width = 353;
  height = 224;

  _image;
  _imageLocation = './assets/img/rose.png';
  _spriteFrames = 4;
  _currentFrame = 0;

  constructor(x, y) {
    this.x = x ?? this.x;
    this.y = y ?? this.y;
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
    const spriteX = this.width * this._currentFrame;
    ctx.beginPath();
    ctx.drawImage(
      this._image,
      spriteX,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  openRose() {
    console.log('Rose:open');
  }

  isClickedOn(mouseX, mouseY) {
    // check if mouse between the left and right side
    if (mouseX >= this.x && mouseX <= this.x + this.width) {
      // check if mouse is between top and bottom side
      if (mouseY >= this.y && mouseY <= this.y + this.height) {
        this._currentFrame += 1;
      }
    }
  }

  tick(timestamp) {
    this._draw();
  }
}
