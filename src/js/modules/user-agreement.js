const agreementWrapper = document.querySelector('.agreement__text-wrapper');  
const agreementBtn = document.querySelector('.agreement__btn');
const agreementLink = document.querySelector('.agreement__link');

const showAllAgreement = () => {
  if(agreementWrapper.classList.contains('agreement__text-wrapper_hide')) {
    agreementWrapper.classList.remove('agreement__text-wrapper_hide');
    agreementBtn.classList.add('agreement__btn_hide');
  }
};

const backToIndexAgreement =() => {
  if(!agreementWrapper.classList.contains('agreement__text-wrapper_hide')) {
    agreementWrapper.classList.add('agreement__text-wrapper_hide');
    agreementBtn.classList.remove('agreement__btn_hide');
  }
};


export const initAgreement = () => {
  agreementBtn.addEventListener('pointerdown', showAllAgreement);
  agreementLink.addEventListener('pointerdown', backToIndexAgreement);
};