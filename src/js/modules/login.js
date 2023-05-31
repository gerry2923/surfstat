const inputPassword = document.querySelector('.form-login__input-pwd');
const inputBtn = document.querySelector('.form-login__btn');

const onTabPress = (evt) => {
  if(evt.key === 'Tab') {
    const activeInput = evt.target;
    if(activeInput.classList.contains('form-login__input-pwd')) {
      activeInput.parentElement.parentElement.classList.add('form-login__wrapper_in-focus');
    } else {
      if(inputPassword.classList.contains('form-login__wrapper_in-focus')) {
        inputPassword.classList.remove('form-login__wrapper_in-focus');
      }
    }
  } 
}

const showText = (evt) => {

  if(!evt.target.classList.contains('form-login__btn_show-text')) {
    evt.target.classList.add('form-login__btn_show-text');
    inputPassword.type = 'text';

    if(!inputPassword.classList.contains('form__password_show-text')) {
      inputPassword.classList.add('form__password_show-text');
    }
  } else {
    evt.target.classList.remove('form-login__btn_show-text');
    inputPassword.classList.remove('form__password_show-text');
    inputPassword.type = 'password';
  }
};


export const initLogin = () => {
  console.log('Ввод пароля  и его интерактивность на этой странице не обрабатывается, ибо было лень. Пример смотрим в registration.html/js');

  document.addEventListener('keyup', onTabPress);
  inputBtn.addEventListener('pointerdown', showText);
  
};