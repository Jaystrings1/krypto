const btn = document.getElementById('menu-btn')
const nav = document.getElementsByClassName('nav')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('block')
    nav.classList.toggle('none')
})