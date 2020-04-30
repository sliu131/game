const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cab = new Cabinet();

const rose = new Rose();

function tick(timestamp) {
  cab.tick();
  window.requestAnimationFrame(this.tick.bind(this));
}
tick();
