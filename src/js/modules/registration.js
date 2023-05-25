const formBtnPwd1 = document.querySelector('.form__btn_pwd-1');
const formBtnPwd2 = document.querySelector('.form__btn_pwd-2');
const formSubmit = document.querySelector('.form__submit');



const showInputText = (elem) => {
  elem.type = 'text';
  elem.classList.add('form__password_show-text');
}

const checkInputValue = (evt) => {
  if(evt.target.value === '') {
    hideInputText(evt.target)
  } else {
    showInputText(evt.target);
  }
}

const hideInputText = (elem) => {
  elem.type = 'password';
  elem.classList.remove('form__password_show-text');
}

const toggleInputTextStyle  = (evt) => {
  const inputElement = evt.target.parentElement.children[0].children[0];

  if(evt.target.classList.contains('form__btn_show')){

    evt.target.classList.remove('form__btn_show');
    hideInputText(inputElement);
    inputElement.removeEventListener('input', checkInputValue);
  } 
  else {
    evt.target.classList.add('form__btn_show');
    if(inputElement.value !== '') {
      showInputText(inputElement);
      inputElement.addEventListener('input', checkInputValue);
    } else {
       inputElement.addEventListener('input', checkInputValue);
    }
  }
};

const checkFormValidity = (evt) => {
  evt.preventDefault();
  console.log('checking validity');
};


export const initRegistration = () => {
  formBtnPwd1.addEventListener('pointerdown', toggleInputTextStyle);
  formBtnPwd2.addEventListener('pointerdown', toggleInputTextStyle);
  formSubmit.addEventListener('click', checkFormValidity);
};