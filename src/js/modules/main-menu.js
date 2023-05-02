const menuBtn = document.querySelector('.site-nav_show');
const menu = document.querySelector('.main-header__menu');
const loginMainHeader = document.querySelector('.main-header__login');

const showHideMenu = (evt)=> {
  if(menu.classList.contains('main-header__menu_hide')) {

    menu.classList.remove('main-header__menu_hide');
    loginMainHeader.classList.add('main-header__login_hide');
    evt.target.classList.add('site-nav_hide');

  }
  else {
    menu.classList.add('main-header__menu_hide');
    loginMainHeader.classList.remove('main-header__login_hide');
    evt.target.classList.remove('site-nav_hide');
  }
}


const addEventsMenu = () => {
  menuBtn.addEventListener('pointerdown', showHideMenu);
}

export {addEventsMenu};