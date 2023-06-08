

const timeIntervalSelect = document.querySelector('.time-interval');
const timeIntervalBtn = document.querySelector('.time-interval__btn');

//  тут меняем только белое
const onChangeBtnColorWhite = (evt) => {
  console.log('onChangeBtnColorWhite\n' + evt.target.classList[0]);
  if(timeIntervalBtn.dataset.order === 'desc') {
    timeIntervalBtn.classList.add('time-interval__btn_active-desc');
  } else {
    timeIntervalBtn.classList.add('time-interval__btn_active-asc');
  }

};

const onChangeBtnColorBlue = (evt) => {
  console.log('onChangeBtnColorBlue\n' + evt.target.classList[0]);
 
  if(timeIntervalBtn.dataset.order === 'desc') {
    timeIntervalBtn.classList.remove('time-interval__btn_active-desc');
  } else {
    timeIntervalBtn.classList.remove('time-interval__btn_active-asc');
  }
  
};
// тут меняем только синие
const onChangeBtnOrder = (evt) => {
  console.log('changing order\n' + evt.target.classList[0]);
  
  if(evt.target.dataset.order === 'asc') {
    timeIntervalBtn.dataset.order = 'desc';
    timeIntervalBtn.classList.add('time-interval__btn_desc');
    
  } else {
    timeIntervalBtn.dataset.order = 'asc';
    timeIntervalBtn.classList.remove('time-interval__btn_desc');
  }

};


export const initTimeIntervalSelection = () => {
  if(timeIntervalSelect) {
    timeIntervalSelect.addEventListener('focusin', onChangeBtnColorWhite);
    timeIntervalSelect.addEventListener('focusout', onChangeBtnColorBlue);
    timeIntervalBtn.addEventListener('pointerdown', onChangeBtnOrder);
  }
};