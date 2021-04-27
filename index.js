
var navbar = document.querySelector('.nav-bar')

window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
