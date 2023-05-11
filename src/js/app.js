import * as flsFunctions from "./modules/functions.js";
import { addEvents} from "./modules/main-menu.js";


flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

addEvents();

document.addEventListener('DOMContentLoaded', ()=> {
  console.log('loading new page ... ');
})