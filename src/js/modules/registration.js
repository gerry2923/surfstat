const formBtnPwd1 = document.querySelector('.form__btn_pwd-1');
const formBtnPwd2 = document.querySelector('.form__btn_pwd-2');
const formSubmit = document.querySelector('.form__submit');
const  inputEmail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__password');
const imputConfirmPassword = document.querySelector('.form__password-confirm'); 



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


const checkEmail = (inputText) => {
  const emailRegex = /^\w*@[a-z]*\.[a-z]*$/;

  return emailRegex.test(inputText);
};


const checkFormValidity = (evt) => {
  evt.preventDefault();
  if (inputEmail.value) {
    const isValid = checkEmail(inputEmail.value);
    console.log(isValid);
    
    if(!isValid) {
      inputEmail.classList.add('form__email_error');
      inputEmail.value = '';
    } else {
      if(inputEmail.classList.contains('form__email_error')) {
        inputEmail.classList.remove('form__email_error');
      }
    }
  }
  console.log('checking validity');
};


export const initRegistration = () => {
  formBtnPwd1.addEventListener('pointerdown', toggleInputTextStyle);
  formBtnPwd2.addEventListener('pointerdown', toggleInputTextStyle);
  formSubmit.addEventListener('click', checkFormValidity);
};