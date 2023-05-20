
const payBtn = document.querySelector('.main-account__btn-pay');
const successfullyPaidMsg = document.querySelector('.successfully-paid-msg');

const showSuccessMsg = () => {
  console.log('clicked');
  if(successfullyPaidMsg.classList.contains('successfully-paid-msg__disabled')) {
    successfullyPaidMsg.classList.remove('successfully-paid-msg__disabled');
  }
};


export const initAcoountUnpaid = () => {
  // добавить обработчик кнопки close
  payBtn.addEventListener('pointerdown', showSuccessMsg);
  console.log('open popup');
};