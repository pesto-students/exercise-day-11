// eslint-disable-next-line
const btn = document.getElementById('btn');
btn.style.display = 'none';
// eslint-disable-next-line
window.onscroll = function () {
  // eslint-disable-next-line
  if ( document.documentElement.scrollTop > 1000) {     // [*]
    // eslint-disable-next-line
    btn.style.display = "block";
    // console.log('scrooled 100')
  } else {
    // eslint-disable-next-line
    document.getElementById("btn").style.display = "none";
    // console.log('not scrolled');
  }
};
// eslint-disable-next-line
function moveToTop() {
  // eslint-disable-next-line
  window.scrollTo(0, 0);
}
