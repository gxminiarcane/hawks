
const menu = document.querySelector('.navbar_toggle'); 
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
});
