let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}

const screen= ScrollReveal({ 
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

screen.reveal('.hero-text',{delay:200 , origin:'bottom'});