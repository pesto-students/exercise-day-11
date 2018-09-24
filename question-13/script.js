// eslint-disable-next-line
window.onscroll = function () {
  // eslint-disable-next-line
  if (document.body.scrollTop > 400) {
    // eslint-disable-next-line
    document.getElementById("btn").style.display = "block";
  } else {
    // eslint-disable-next-line
    document.getElementById("btn").style.display = "none";
  }
};
// eslint-disable-next-line
function moveToTop() {
  // eslint-disable-next-line
  window.scrollTo(0, 0);
}
