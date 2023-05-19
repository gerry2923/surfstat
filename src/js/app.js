
import * as flsFunctions from "./modules/functions.js";
import { addEvents} from "./modules/main-menu.js";
import { startModalIni } from "./modules/modals.js";


flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

addEvents();
startModalIni();