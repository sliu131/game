const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const set = new Setting();
const s1 = new Scene1();
//const s2 = new Scene2();
const cab = new Cabinet();

let currentScene = s1;

function tick(timestamp) {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  set.tick();
  currentScene.tick();

  // call redraw / tick
  window.requestAnimationFrame(tick);
}

tick();

function onClick(event) {
  const element = event.target;
  const x = event.offsetX;
  const y = event.offsetY;

  if (currentScene.cabinet.isClickedOn(x, y)) {
    console.warn('Cabinet clicked on');
    currentScene.cabinet.openCabinet();
  }

  // console.log('onKeyDown');
  // const key = event.key.toLowerCase();

  console.log(x, y);
}

canvas.addEventListener('click', onClick);
