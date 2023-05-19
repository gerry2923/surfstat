import '../modules/wNumb.js';
import '../modules/nouislider.js';
import {addRemoveClass, getCoords} from '../modules/utils.js';

// ---- tips ---
const openTipsCard = document.querySelector('.t-header__results-filter_ditails');
const closeTipsCard = document.querySelector('.tips__close-btn');
const tipsCard = document.querySelector('.tips');

const inputTipsList = document.querySelectorAll('.tips__input');
const labelTispList = document.querySelectorAll('.tips__label');
//  --- filter -- 
const showFilterBtn = document.getElementById('filters');
const filterForm = document.querySelector('.filter-form');
const closeFilterBtn = document.querySelector('.filter__close-btn');
const filterCardItemList = document.querySelectorAll('.filter-form .card__content-item');
const filterLabelList = document.querySelectorAll('.filter__label');
const filterHeaderItemList = document.querySelectorAll('.filter__header-item');

const scrollsList = document.querySelectorAll(".filter-form div[class$='__wrapper']  > div:first-child");
const inputContainerList = document.querySelectorAll(".filter-form .card__content-wrapper div[class$='input-container']");
const filterResetBtnList = document.querySelectorAll('.filter__reset-btn');

const createSliderElement = (sliderElement, inputs) => {
  // создаем главный элемент слайдера
  noUiSlider.create(sliderElement, {
    start: [20, 80],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 100
    },
    format: wNumb({
      decimals: 0,
      thousand: '.',
    }),

    
  });
  // задаем ему событие на обновление
  sliderElement.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = values[handle];
  });
  // Listen to keydown events on the input field.
  // добавляем событие на синхронизацию изменения в полях ввода и слайдере
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        sliderElement.noUiSlider.setHandle(handle, this.value);
    });
    input.addEventListener('keydown', function (e) {

        var values = sliderElement.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = sliderElement.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                sliderElement.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    sliderElement.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    sliderElement.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
  });

};

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

const openFilters = () => {
  console.log('to open...');
  addRemoveClass(filterForm, 'filter_disabled');
};

const resetFilter = () => {
  filterForm.querySelector('.filter__header-item').checked = true;

  for(let i = 0; i < inputContainerList.length; i++) {
    let input0 = inputContainerList[i].querySelector("input:first-child");
    input0.value='0';
    input0.dispatchEvent(new Event('change'));
    let input1 = inputContainerList[i].querySelector('input:last-child');
    input1.value='50';
    input1.dispatchEvent(new Event('change'));
  }

  filterForm.querySelector('#positive').checked = true;
};

const onDisplayFilterCard = (evt) => {
  console.log('ondisplay');
  const id = evt.target.id;
  filterLabelList.forEach(label => {
    if(label.htmlFor === id) {
      label.parentElement.parentElement.classList.remove('filter__card_disabled');
    } else {
      label.parentElement.parentElement.classList.add('filter__card_disabled');
    }
  });
};


const initpage = () => {
  console.log('initpage...');
  document.querySelector('.tips').classList.add('tips_disabled');
  openTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);
  closeTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);
  
  inputTipsList.forEach(inputElement => {
    inputElement.addEventListener('change', onCheckedRadioTips);
  });

  setDisplayTipsLabel(inputTipsList.item(0).id);
  
  showFilterBtn.addEventListener('pointerdown', openFilters);
  closeFilterBtn.addEventListener('pointerdown', openFilters)

  for(let i = 0; i < filterHeaderItemList.length; i ++) {
    filterHeaderItemList[i].childNodes[1].addEventListener('change', onDisplayFilterCard);
  }
  for(let i = 0; i < scrollsList.length; i++) {
    let elem = scrollsList[i];
    let str0 = `.${inputContainerList[i].classList[0]} input[type='text']:first-child`;
    let str1 = `.${inputContainerList[i].classList[0]} input[type='text']:last-child`;  
    let input0 = document.querySelector(str0);
    let input1 = document.querySelector(str1);
    let inputs = [input0, input1]
    createSliderElement(elem, inputs);
  }

  for(let i = 0; i < filterResetBtnList.length; i++) {
    filterResetBtnList[i].addEventListener('pointerdown', resetFilter);
  }

  for(let i = 0; i < filterCardItemList.length; i++) {
    const checkedRadioId = filterForm.querySelector('.filter__input:checked').id;
    
    if(filterLabelList[i].htmlFor === checkedRadioId) {
      filterCardItemList[i].classList.remove('filter__card_disabled');
    } else {
      filterCardItemList[i].classList.add('filter__card_disabled');
    }
  }
};

export const startModalIni = () => {document.addEventListener('DOMContentLoaded', initpage)};







