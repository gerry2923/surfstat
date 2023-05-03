const menuBtn = document.querySelector('.site-nav_show');
const menu = document.querySelector('.main-header__menu');
const loginMainHeader = document.querySelector('.main-header__login');
const mainHeader = document.querySelector('.main-header');

const showHideMenu = (evt)=> {
  if(menu.classList.contains('main-header__menu_hide')) {

    menu.classList.remove('main-header__menu_hide');
    loginMainHeader.classList.add('main-header__login_hide');
    evt.target.classList.add('site-nav_hide');
    mainHeader.style.boxShadow = 'none';

  }
  else {
    menu.classList.add('main-header__menu_hide');
    loginMainHeader.classList.remove('main-header__login_hide');
    evt.target.classList.remove('site-nav_hide');
    mainHeader.style.boxShadow = '0px 5px 13px 4px rgba(0, 0, 0, 0.09)';
  }
}


// ------------------------------------------------------------

const searchBtn = document.querySelector('.t-header__input-btn');

const showRegistrationPage0 = () => {
  window.location = 'welcome.html';

};


const addEvents = () => {
  menuBtn.addEventListener('pointerdown', showHideMenu);
  searchBtn.addEventListener('pointerdown', showRegistrationPage0);

}


export {addEvents};