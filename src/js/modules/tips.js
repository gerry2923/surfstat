const openTipsCard = document.querySelector('.t-header__results-filter_ditails');
const closeTipsCard = document.querySelector('.tips__close-btn');
const tipsCard = document.querySelector('.tips');
const inputTipsList = document.querySelectorAll('.tips__input');
const labelTispList = document.querySelectorAll('.tips__label');


const resetTipsCard = () => {
  inputTipsList.item(0).checked = true;
  setDisplayTipsLabel(inputTipsList.item(0).id);
};

const onCloseOpenTipsCard = () => {
  if(tipsCard.classList.contains('tips_disabled')) {
    tipsCard.classList.remove('tips_disabled');
    resetTipsCard();
  } else {
    tipsCard.classList.add('tips_disabled');
  }
};

const setDisplayTipsLabel  = (id) => {

  labelTispList.forEach( (label) => {
    const tipLabelListItem = label.parentElement.parentElement;

    if(label.htmlFor === id) { 
      tipLabelListItem.style.display = 'block';
    } else {
      tipLabelListItem.style.display = 'none';
    }
  });
};

const onCheckedRadioTips = evt => setDisplayTipsLabel(evt.target.id);


export const initTips = () => {
  openTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);
  closeTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);

  inputTipsList.forEach(inputElement => {
    inputElement.addEventListener('change', onCheckedRadioTips);
  });

  setDisplayTipsLabel(inputTipsList.item(0).id);
};

  