const header = document.querySelector('.header')
const menuBurger = document.querySelector('.__menu__burger')
const navbar = document.querySelector('.navbar')
const nav = document.querySelector('.nav')
const firstbtn = document.querySelector('.__first__btn')
const btnhidden = document.querySelector('.btn__hidden')

mapboxgl.accessToken = 'pk.eyJ1IjoibWJidGtkZXZqaW05MSIsImEiOiJja3R0cXNxYmIwM2J0MnBtbWgzMHpnbzBpIn0.2aoySEqBh3XRrXp3d2mg4g';
new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [2.333333, 48.866667],
  zoom: 10
});

document.addEventListener('scroll', (e) => {
  if(scrollY > 0) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})

menuBurger.addEventListener('click', (e) => {
  navbar.classList.add('active')
  nav.classList.add('active')
  navbar.style.top = `${parseInt(scrollY)}px`
  document.body.style.overflow = 'hidden'
})

navbar.addEventListener('click', (e) => {
  if(e.target === navbar) {
    navbar.classList.remove('active')
    nav.classList.remove('active')
    document.body.style.overflow = ''
  }
})

firstbtn.addEventListener('click', () => {
  btnhidden.classList.toggle('active')
})
