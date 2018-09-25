let x = 1;
// eslint-disable-next-line
const boxes = document.getElementById('boxes');
// eslint-disable-next-line
window.onscroll = function() {
  // eslint-disable-next-line
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    // eslint-disable-next-line
    const newBox = document.createElement('div');
    newBox.setAttribute('class', `box${x > 5 ? x = 1 : x += 1}`);
    setTimeout(() => boxes.appendChild(newBox), 2000);
    // boxes.appendChild(newBox);
  }
};
