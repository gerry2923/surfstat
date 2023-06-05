import { checkRemoveClass,  checkAddClass } from '../modules/utils.js';
 
const menuBtn = document.querySelector('.site-nav_show');
const menu = document.querySelector('.main-header__menu');
const loginMainHeader = document.querySelector('.main-header__login');
const mainHeader = document.querySelector('.main-header');
const searchBtn = document.querySelector('.t-header__input-btn');

const showHideMenu = (evt)=> {
  if(menu.classList.contains('main-header__menu_hide')) {
    menu.classList.remove('main-header__menu_hide');
    loginMainHeader.classList.add('main-header__login_hide');
    evt.target.classList.add('site-nav_hide');
    mainHeader.classList.remove('main-header_shadow');

  }
  else {
    menu.classList.add('main-header__menu_hide');
    loginMainHeader.classList.remove('main-header__login_hide');
    evt.target.classList.remove('site-nav_hide');
    mainHeader.classList.add('main-header_shadow');
  }
}

const removeHideMenuClass = () => {
  if (document.documentElement.clientWidth >= 1024) {
    checkRemoveClass(menu, 'main-header__menu_hide');
    // if(menu.classList.contains('main-header__menu_hide')) {
    //   menu.classList.remove('main-header__menu_hide');
    // }
  } else {
    checkAddClass(menu, 'main-header__menu_hide');
  }
};

const showRegistrationPage0 = () => {
  window.location = 'welcome.html';
};

export const setMainMenuEvt = () => {
  menuBtn.addEventListener('pointerdown', showHideMenu);
  removeHideMenuClass();
  window.addEventListener('resize', removeHideMenuClass);

}

export const setUnregSearchBtnEvt = () => {
  searchBtn.addEventListener('pointerdown', showRegistrationPage0);
};
