const burger = document.querySelector('.burger i');
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const mobile_menu = document.querySelector('.mobile-menu');

const mark = 'fa-xmark';
const bars = 'fa-bars';

burger.addEventListener('click', () => {
    if (burger.classList.contains(bars)) {
        burger.classList.remove(bars);
        burger.classList.add(mark);
        mobile_menu.style.display = 'flex';
    } else {
        burger.classList.remove(mark);
        burger.classList.add(bars);
        mobile_menu.style.display = 'none';
    }
})