//  импортируемые модули -------------------------

import * as flsFunctions from "./modules/functions.js";
import { setMainMenuEvt, setUnregSearchBtnEvt} from "./modules/main-menu.js";
import { setShowLinkBtnEvt, setCopyLinkBtnEvt } from "./modules/footer.js";
import { initTips } from "./modules/tips.js"; 
import { initFilters } from "./modules/filters.js";
import { initAcoountUnpaid } from "./modules/account.js";

flsFunctions.isWebp();

// глобальные переменные ---------------------------


// функции -----------------------------------------
const loadMain = () => {
  const mainName = document.querySelector('main').className;

  switch(mainName) {
    case 'main-layout': console.log(mainName);
      setUnregSearchBtnEvt();  
    // modals
      initTips();
      initFilters();
      break;

    case 'main-account-trial': console.log(mainName);
      break;
    
    case 'main-account-unpaid': console.log(mainName);
      initAcoountUnpaid();
      break;

    case 'main-account': console.log(mainName);
      break;

    case 'description': console.log(mainName);
      break;

    case 'main-recover': console.log(mainName);
      break;

    case 'main-login': console.log(mainName);
      break;

    case 'policy': console.log(mainName);
      break;

    case 'main-reg-trial': console.log(mainName);
      break;

    case 'main-reg': console.log(mainName);
      break;

    case 'agreement': console.log(mainName);
      break;

    case 'welcome': console.log(mainName);
      break;

    case 'not-found': console.log(mainName);
      break;
  }
};


// логика программы ----------------------------------

const appInit = () => {
  document.addEventListener('DOMContentLoaded', loadMain);
  setMainMenuEvt(); // события main-header
  setShowLinkBtnEvt(); // события main-footer
  setCopyLinkBtnEvt();
  // 
  // загрузка header и footer
};


// запуск ---------------------------------------------
appInit();





// addEvents();
// startModalIni();

