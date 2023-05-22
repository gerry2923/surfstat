
const payBtn = document.querySelector('.main-account__btn-pay');
const successfullyPaidMsg = document.querySelector('.successfully-paid-msg');
const successfullyCloseBtn = document.querySelector('.successfully-paid-msg__button');

const showSuccessMsg = () => {
  console.log('clicked');
  if(successfullyPaidMsg.classList.contains('successfully-paid-msg__disabled')) {
    successfullyPaidMsg.classList.remove('successfully-paid-msg__disabled');
  }
};

const closeSuccessMsg = () => {
  if(!successfullyPaidMsg.classList.contains('successfully-paid-msg__disabled')) {
    successfullyPaidMsg.classList.add('successfully-paid-msg__disabled');
  }  
};

export const initAcoountPay = () => {
  payBtn.addEventListener('pointerdown', showSuccessMsg);
  console.log('open popup');
  successfullyCloseBtn.addEventListener('pointerdown', closeSuccessMsg);
};