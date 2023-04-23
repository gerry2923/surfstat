import replace from 'gulp-replace'; // поиск и замена
import gulpPlumber from 'gulp-plumber'; // обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условное ветвление

// Экспортируем объект

export const plugins = {
  replace: replace,
  plumber: gulpPlumber,
  notify: notify,
  browsersync: browserSync,
  newer: newer, 
  if: ifPlugin,
};