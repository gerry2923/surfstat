const formBtnPwd1 = document.querySelector('.form__btn_pwd-1');
const formBtnPwd2 = document.querySelector('.form__btn_pwd-2');
const formSubmit = document.querySelector('.form__submit');
const inputEmail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__password');
const inputConfirmPassword = document.querySelector('.form__password-confirm');
const inputPlaceholderPwd = document.querySelector('.form__btn-wrapper:nth-child(2) .form__input-container'); 
const inputPlaceholderPwdConfirm = document.querySelector('.form__btn-wrapper:nth-child(3) .form__input-container');
const inputCheckbox = document.querySelector('.form__agree');

const inputPwdWrapper = document.querySelectorAll('.registration-form .form__btn-wrapper');

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

const removeClass = (element, className) => {
  if(element.classList.contains(className)){
    element.classList.remove(className);
  }
};

const formReset = () => {
  removeClass(formBtnPwd1, 'form__btn_show');
  removeClass(formBtnPwd2, 'form__btn_show');
  removeClass(inputEmail, 'form__email_error');
  removeClass(inputPlaceholderPwd, 'form__input-container_error');
  removeClass(inputPlaceholderPwdConfirm, 'form__input-container_error');
  removeClass(inputCheckbox, 'form__agree_error');
  inputEmail.value = "";
  inputPassword.value = "";
  inputConfirmPassword.value = "";
  inputCheckbox.checked = false;
};

const checkEmail = (inputText) => {
  const emailRegex = /^\w*@[a-z]*\.[a-z]*$/;

  return emailRegex.test(inputText);
};

const checkPwd = (inputPwd) => {
  return inputPwd !== '' ? true : false;
};

const checkPwdConfirm = (str1, str2) => {
  return str1 === str2 ? true : false;
};
// -------------------------------------------
const checkFormValidity = (evt) => {
  evt.preventDefault();
  let isFormValid = true;

  console.log(`email value = ${inputEmail.value} ;`);
 
  if (inputEmail.value !== '') {
    const isValid = checkEmail(inputEmail.value);
    
    if(!isValid) {
      inputEmail.classList.add('form__email_error');
      inputEmail.value = '';
      if(isFormValid) {
        isFormValid = false;
      }
    } else {
      if(inputEmail.classList.contains('form__email_error')) {
        inputEmail.classList.remove('form__email_error');
      }
    }
  } else {
    inputEmail.classList.add('form__email_error');
    if(isFormValid){
      isFormValid = false;
    }
  }


  if( checkPwd(inputPassword.value) ) {
    if(inputPlaceholderPwd.classList.contains('form__input-container_error')) {
      inputPlaceholderPwd.classList.remove('form__input-container_error');
    }
  } else {
    inputPlaceholderPwd.classList.add('form__input-container_error');
    inputPlaceholderPwdConfirm.classList.add('form__input-container_error');
    inputPassword.value = '';
    inputConfirmPassword.value = '';

    if(isFormValid){
      isFormValid = false;
    }
  }


  if( !checkPwdConfirm(inputPassword.value, inputConfirmPassword.value) ) {
    inputPlaceholderPwdConfirm.classList.add('form__input-container_error');
    inputConfirmPassword.value = '';

    if(isFormValid){
      isFormValid = false;
    }
  } else {
    if(inputPlaceholderPwdConfirm.classList.contains('form__input-container_error')) {
      inputPlaceholderPwdConfirm.classList.remove('form__input-container_error');
    }
  }

  if(!inputCheckbox.checked) {
    inputCheckbox.classList.add('form__agree_error');
    if(isFormValid){
      isFormValid = false;
    }

  } else {
    if(inputCheckbox.classList.contains('form__agree_error')) {
      inputCheckbox.classList.remove('form__agree_error');
    }
  }

  if(isFormValid){
    formReset();
    console.log('Регистрация прошла успешно');
  }
};


const onTabForm = (evt) => {
  if(evt.key === 'Tab') {
    const activeInput = document.activeElement;
    if(activeInput.classList.contains('form__password')) {
      activeInput.parentElement.parentElement.classList.add('form__btn-wrapper_in-focus');
    } else {
      inputPwdWrapper.forEach(element => {
        if(element.classList.contains('form__btn-wrapper_in-focus')) {
          element.classList.remove('form__btn-wrapper_in-focus');
        }
      });
    }
    console.log(document.activeElement);
  }
  console.log('changing visibility');
};

const onStyleChange = (evt) => {
  removeClass(evt.target, 'form__agree_error');
}; 

export const initRegistration = () => {
  formBtnPwd1.addEventListener('pointerdown', toggleInputTextStyle);
  formBtnPwd2.addEventListener('pointerdown', toggleInputTextStyle);
  formSubmit.addEventListener('click', checkFormValidity);
  inputCheckbox.addEventListener('change', onStyleChange);
  document.addEventListener('keyup', onTabForm);
};