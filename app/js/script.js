const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu')


btnHamburger.addEventListener('click', function(){ 
    console.log('click hamburger');

    if(header.classList.contains('open')) { // close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        menu.classList.remove('open')
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }

    else {  // open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        menu.classList.add('open')
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});