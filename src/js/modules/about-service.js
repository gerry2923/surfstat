
  
  const aboutServiceItemBtnCloseList = document.querySelectorAll('.about-service__item-button');
  const aboutServiceItemTextList = document.querySelectorAll('.about-service__item-text');

  const onAccordion = (evt) => {
    const textElementCurrent = evt.target.parentElement.children[1];

    if(textElementCurrent.classList.contains('about-service__item-text_hide')) {
      aboutServiceItemTextList.forEach(item => {
        if(!item.classList.contains('about-service__item-text_hide')) {
          item.classList.add('about-service__item-text_hide');
          item.nextElementSibling.classList.remove('about-service__item-button_close');
        } 
      });

      textElementCurrent.classList.remove('about-service__item-text_hide');
      evt.target.classList.add('about-service__item-button_close');
    } else {
      textElementCurrent.classList.add('about-service__item-text_hide');
      evt.target.classList.remove('about-service__item-button_close');
    }
  };

  export const initAboutService = () => {
    for(let i = 0; i < aboutServiceItemBtnCloseList.length; i++) {
      aboutServiceItemBtnCloseList[i].addEventListener('pointerdown', onAccordion);
      aboutServiceItemTextList[i].classList.toggle('about-service__item-text_hide'); 
    }
  };


