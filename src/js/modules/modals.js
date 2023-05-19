import '../modules/wNumb.js';
import '../modules/nouislider.js';
import {addRemoveClass, getCoords} from '../modules/utils.js';


const openTipsCard = document.querySelector('.t-header__results-filter_ditails');
const closeTipsCard = document.querySelector('.tips__close-btn');
const tipsCard = document.querySelector('.tips');

const inputTipsList = document.querySelectorAll('.tips__input');
const labelTispList = document.querySelectorAll('.tips__label');

const showFilterBtn = document.getElementById('filters');
const filterForm = document.querySelector('.filter-form');
const closeFilterBtn = document.querySelector('.filter__close-btn');

const initpage = () => {
  console.log('initpage...');

  const resetTipsCard = () => {
    inputTipsList.item(0).checked = true;
    setDisplayLabel(inputTipsList.item(0).id);
  };

  const onCloseOpenTipsCard = () => {
    if(tipsCard.classList.contains('tips_disabled')) {
      tipsCard.classList.remove('tips_disabled');
      resetTipsCard();
    } else {
      tipsCard.classList.add('tips_disabled');
    }
  };

  const setDisplayLabel  = (id) => {

    labelTispList.forEach( (label) => {
      const tipLabelListItem = label.parentElement.parentElement;

      if(label.htmlFor === id) { 
        tipLabelListItem.style.display = 'block';
      } else {
        tipLabelListItem.style.display = 'none';
      }
    });
  };

  const onCheckedRadioTips = evt => setDisplayLabel(evt.target.id);

  const openFilters = () => {
    console.log('to open...');
    addRemoveClass(filterForm, 'filter_disabled');
  };

  openTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);
  closeTipsCard.addEventListener('pointerdown', onCloseOpenTipsCard);
  
  inputTipsList.forEach(inputElement => {
    inputElement.addEventListener('change', onCheckedRadioTips);
  });

  setDisplayLabel(inputTipsList.item(0).id);
  // -----
  showFilterBtn.addEventListener('pointerdown', openFilters);
  closeFilterBtn.addEventListener('pointerdown', openFilters)

};



export const startModalIni = () => {document.addEventListener('DOMContentLoaded', initpage)};

const sliderElement = document.getElementById('popularity-slider-scroll');
const inputMin = document.getElementById('popularity-input-min');
const inputMax = document.getElementById('popularity-input-max');
const inputs = [inputMin, inputMax];

console.log(sliderElement);
console.log(inputs);

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

sliderElement.noUiSlider.on('update', function(values, handle) {
  inputs[handle].value = values[handle];
});

// Listen to keydown events on the input field.
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
