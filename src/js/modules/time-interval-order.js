

const timeIntervalSelect = document.querySelector('.time-interval');
const timeIntervalBtn = document.querySelector('.time-interval__btn');

//  Кнопка в активном состоянии имеет цвет синий, переключатель серый
const onChangeBtnColorGray = (evt) => {
  console.log('onChangeBtnColorGray\n' + evt.target.classList[0]);

  evt.target.parentElement.classList.add('time-interval__container_active');

  if(timeIntervalBtn.dataset.order === 'desc') {
    timeIntervalBtn.classList.add('time-interval__btn_active-desc');
  } else {
    timeIntervalBtn.classList.add('time-interval__btn_active-asc');
  }

};

const onChangeBtnColorBlue = (evt) => {
  console.log('onChangeBtnColorBlue\n' + evt.target.classList[0]);
 evt.target.parentElement.classList.remove('time-interval__container_active');
  if(timeIntervalBtn.dataset.order === 'desc') {
    timeIntervalBtn.classList.remove('time-interval__btn_active-desc');
  } else {
    timeIntervalBtn.classList.remove('time-interval__btn_active-asc');
  }
  
};
// Кнопка в неактивном состоянии имеет цвет серый, а переключатель белый
const onChangeBtnOrder = (evt) => {
  console.log('changing order\n' + evt.target.classList);
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
    timeIntervalSelect.addEventListener('focusin', onChangeBtnColorGray);

    timeIntervalSelect.addEventListener('focusout', onChangeBtnColorBlue);
    timeIntervalBtn.addEventListener('pointerdown', onChangeBtnOrder);
  }
};