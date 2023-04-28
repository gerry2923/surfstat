// Импортируем основной модуль
import gulp from "gulp";
// const gulp = require('gulp'); // старая версия
// Импорт путей
import { path } from "./gulp/config/path.js";
// импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";



// Передаем значение в глобальную переменную

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import { ottToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { fontFilesSave, fontStyle2 } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  // сразу заливаем на ftp сервер /*также изменить для html, scss, js,image*/ */
  //  gulp.watch(path.watch.html, gulp.series(html, ftp)); 
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);

}

export { svgSprite };
// Последовательная обработка шрифтов
// const fonts = gulp.series(ottToTtf, ttfToWoff, fontStyle);
const fonts = gulp.series(fontFilesSave, fontStyle2);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)); 

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks,ftp);

export { dev };
export { build };
export { deployZIP };
export { deployFTP };

//  выполнение сценария по умолчанию
gulp.task('default', dev);