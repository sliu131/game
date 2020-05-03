class Cabinet {
  // Public
  x = 670;
  y = 525;
  width = 223;
  height = 152;

  // Private
  _image;
  _imageLocation = './assets/img/cab.png';
  _spriteFrames = 1;
  _currentFrame = 0;

  constructor(x, y) {
    this.x = x ?? this.x;
    this.y = y ?? this.y;

    // console.log('Cab:constructor');
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

  openCabinet() {
    console.log('Cab:open');
  }
  //   this._currentFrame += 1;
  isClickedOn(mouseX, mouseY) {
    // check if mouse between the left and right side
    if (mouseX >= this.x && mouseX <= this.x + this.width) {
      // check if mouse is between top and bottom side
      if (mouseY >= this.y && mouseY <= this.y + this.height) {
        this._currentFrame = 1;
      }
    }

    // return false;
  }

  tick(timestamp) {
    this._draw();
  }
}
