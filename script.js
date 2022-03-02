const burger = document.querySelector('.burger');
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
	navbar.classList.toggle('navbar-mobile');
	menu.classList.toggle('menu-mobile')
})
