const menuBurger = document.querySelector('.__menu__burger')
const navbar = document.querySelector('.navbar')
const nav = document.querySelector('.nav')
const firstbtn = document.querySelector('.__first__btn')
const btnhidden = document.querySelector('.btn__hidden')

menuBurger.addEventListener('click', () => {
  navbar.classList.add('active')
  nav.classList.add('active')
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
