const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const set = new Setting();
const s1 = new Scene1();
const s2 = new Scene2();

const cab = new Cabinet();

function tick(timestamp) {
  set.tick();
  s1.tick();
  s2.tick();
  cab.tick();

  window.requestAnimationFrame(this.tick.bind(this));
}
tick();

function onclick(event) {
  // console.log('onKeyDown');
  // const key = event.key.toLowerCase();

  console.log(event);
}

document.addEventListener('click', onclick);
