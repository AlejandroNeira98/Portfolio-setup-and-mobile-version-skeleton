const menubtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closemenu = document.querySelector('.close-menu');
const mobileMenuItems1 = document.querySelector('.mobile-menu-item1');
const mobileMenuItems2 = document.querySelector('.mobile-menu-item2');
const mobileMenuItems3 = document.querySelector('.mobile-menu-item3');

function showMenue(e) {
  e.preventDefault();
  mobileMenu.style.display ='block';
}

function hideMenu() {
  mobileMenu.style.display ='none';
}

menubtn.addEventListener('click', showMenue);
closemenu.addEventListener('click', hideMenu);
mobileMenuItems1.addEventListener('click', hideMenu);
mobileMenuItems2.addEventListener('click', hideMenu);
mobileMenuItems3.addEventListener('click', hideMenu);