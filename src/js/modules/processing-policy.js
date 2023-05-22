const policyWrapper = document.querySelector('.policy__items-wrapper');  
const policyBtn = document.querySelector('.policy__btn');
const policyLink = document.querySelector('.policy__link');

const showAllPolicy = () => {
  if(policyWrapper.classList.contains('policy__items-wrapper_hide')) {
    policyWrapper.classList.remove('policy__items-wrapper_hide');
    policyBtn.classList.add('policy__btn_hide');
  }
};

const backToIndexPolicy =() => {
  if(!policyWrapper.classList.contains('policy__items-wrapper_hide')) {
    policyWrapper.classList.add('policy__items-wrapper_hide');
    policyBtn.classList.remove('policy__btn_hide');
  }
};

export const initPolicy = () => {
  policyBtn.addEventListener('pointerdown', showAllPolicy);
  policyLink.addEventListener('pointerdown', backToIndexPolicy);
};