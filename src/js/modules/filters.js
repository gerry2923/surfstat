import { createSliderElement } from './slider.js';
import { addRemoveClass } from './utils.js';

const showFilterBtn = document.getElementById('filters');
const filterForm = document.querySelector('.filter-form');
const closeFilterBtn = document.querySelector('.filter__close-btn');
const filterCardItemList = document.querySelectorAll('.filter-form .card__content-item');
const filterLabelList = document.querySelectorAll('.filter__label');
const filterHeaderItemList = document.querySelectorAll('.filter__header-item');
const scrollsList = document.querySelectorAll(".filter-form div[class$='__wrapper']  > div:first-child");
const inputContainerList = document.querySelectorAll(".filter-form .card__content-wrapper div[class$='input-container']");
const filterResetBtnList = document.querySelectorAll('.filter__reset-btn');

const openFilters = () => {
  addRemoveClass(filterForm, 'filter_disabled');
};
//  artificial reset at random
const resetFilter = () => {
  filterForm.querySelector('.filter__header-item').checked = true;

  for(let i = 0; i < inputContainerList.length; i++) {
    let input0 = inputContainerList[i].querySelector("input:first-child");
    let input1 = inputContainerList[i].querySelector('input:last-child');
    input0.value='0';
    input1.value='50';
    input0.dispatchEvent(new Event('change'));
    input1.dispatchEvent(new Event('change'));
  }

  filterForm.querySelector('#positive').checked = true;
};

const onDisplayFilterCard = (evt) => {
  const id = evt.target.id;

  filterLabelList.forEach(label => {
    if( label.htmlFor === id ) {
      label.parentElement.parentElement.classList.remove('filter__card_disabled');
    } else {
      label.parentElement.parentElement.classList.add('filter__card_disabled');
    }
  });
};

export const initFilters = () => { 
  // события на кнопки показать - закрыть окно с фильтрами
  showFilterBtn.addEventListener('pointerdown', openFilters);
  closeFilterBtn.addEventListener('pointerdown', openFilters)
  // событие на выбор фильтра
  for(let i = 0; i < filterHeaderItemList.length; i ++) {
    filterHeaderItemList[i].childNodes[1].addEventListener('change', onDisplayFilterCard);
  }
  // создание слайдера
  for(let i = 0; i < scrollsList.length; i++) {
    let elem = scrollsList[i];
    let str0 = `.${inputContainerList[i].classList[0]} input[type='text']:first-child`;
    let str1 = `.${inputContainerList[i].classList[0]} input[type='text']:last-child`;  
    let input0 = document.querySelector(str0);
    let input1 = document.querySelector(str1);
    let inputs = [input0, input1]
    createSliderElement(elem, inputs);
  }
  // сброс всех карточек фильтра
  for(let i = 0; i < filterResetBtnList.length; i++) {
    filterResetBtnList[i].addEventListener('pointerdown', resetFilter);
  }

  // оставляем видимым только одну карточку, фильтр которой выделен
  for(let i = 0; i < filterCardItemList.length; i++) {
    const checkedRadioId = filterForm.querySelector('.filter__input:checked').id;
    
    if(filterLabelList[i].htmlFor === checkedRadioId) {
      filterCardItemList[i].classList.remove('filter__card_disabled');
    } else {
      filterCardItemList[i].classList.add('filter__card_disabled');
    }
  }
};









