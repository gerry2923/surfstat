import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

const Extensions = {
  "ttf": 'truetype',
  "otf": 'opentype',
  "woff2": 'woff2',
  "woff": 'woff'
};

export const ottToTtf = () => {
  // Ищем файлы шрифтов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError(
       {
        title: "FONTS",
        message: "Error: <%= error.message %>"
       } 
      )
    ))
    // Конвертируем в .ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    // Выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugins.plumber(
     app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
     })
  ))
  // Конвертируем в .woff
  .pipe(fonter({
    formats: ['woff']
  })) 
  // Выгружаем в папку с результатами
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  //Ищем файлы шрифтов .ttf
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  // Конвертируем в .woff2
  .pipe(ttf2woff2())
  // Выгружаем в папку с результатами
  .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontStyle = () => {
  // Файл стилей подключения шрифтов
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  // ПРоверяем существуют ли файлы шрифтов
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if(fontsFiles){
    // Проверяем существует ли файл стилей для подключения шрифтов
    if(!fs.existsSync(fontsFile)){
      //Если файла нет, создаем его
      fs.writeFile(fontsFile, '', cb);
      let newFileOnly;
      for(var i = 0; i < fontsFiles.length; i++){
         //Записываем подключение шрифтов в файл стилей
         let fontFileName = fontsFiles[i].split('.')[0];
         if(newFileOnly !== fontFileName) {
          let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
          let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
          
          if(fontWeight.toLowerCase() === 'thin') {
            fontWeight = 100;
          } else if(fontWeight.toLowerCase() === 'extralight') {
            fontWeight = 200;
          } else if(fontWeight.toLowerCase() === 'light') {
            fontWeight = 300;
          } else if(fontWeight.toLowerCase() === 'medium') {
            fontWeight = 500;
          } else if(fontWeight.toLowerCase() === 'semibold') {
            fontWeight = 600;
          } else if(fontWeight.toLowerCase() === 'bold') {
            fontWeight = 700;
          } else if(fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
            fontWeight = 800;
          } else if(fontWeight.toLowerCase() === 'black') {
            fontWeight = 900;
          } else {
            fontWeight = 400;
          }
          fs.appendFile(fontsFile,
            `@font-face {
                font-family: ${fontName};
                font-display: swap;
                src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") forman("woff");
                font-weight: ${fontWeight};
                font-style: normal;
            }\r\n`, cb);
          newFileOnly = fontFileName;
        }
      }
    } else {
      // если файл есть, выводим сообщение 
      console.log("Файл scss/fonts.scss уже существует. Для обновления файла его нужно удалить")
    }
}});

return app.gulp.src(`${app.path.srcFolder}`);
function cb() {}

}

export const fontFilesSave = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.*`, {})
  .pipe(app.plugins.plumber(
     app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>"
     })
  ))
  // Выгружаем в папку с результатами
  .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontStyle2 = () => {
  // Файл стилей подключения шрифтов
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  // ПРоверяем существуют ли файлы шрифтов
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if(fontsFiles){
    // Проверяем существует ли файл стилей для подключения шрифтов
    if(!fs.existsSync(fontsFile)){
      //Если файла нет, создаем его
      fs.writeFile(fontsFile, '', cb);
      let newFileOnly;
      console.log("lentgh: "+fontsFiles.length);
      for(var i = 0; i < fontsFiles.length; i++){
        console.log(fontsFile[i]);
         //Записываем подключение шрифтов в файл стилей
         let fontFileName = fontsFiles[i].split('.')[0];
         let fontFileExtension = fontsFiles[i].split('.')[1];
         let fontFileFormat = Extensions[fontFileExtension] ? Extensions[fontFileExtension]: fontFileExtension; 


         if(newFileOnly !== fontFileName) {

          let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;

          let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
          
          if(fontWeight.toLowerCase() === 'thin') {
            fontWeight = 100;
          } else if(fontWeight.toLowerCase() === 'extralight') {
            fontWeight = 200;
          } else if(fontWeight.toLowerCase() === 'light') {
            fontWeight = 300;
          } else if(fontWeight.toLowerCase() === 'medium') {
            fontWeight = 500;
          } else if(fontWeight.toLowerCase() === 'semibold') {
            fontWeight = 600;
          } else if(fontWeight.toLowerCase() === 'bold') {
            fontWeight = 700;
          } else if(fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
            fontWeight = 800;
          } else if(fontWeight.toLowerCase() === 'black') {
            fontWeight = 900;
          } else {
            fontWeight = 400;
          }
          fs.appendFile(fontsFile,
            `@font-face {
                font-family: '${fontName}';
                font-display: swap;
                src: url("../fonts/${fontFileName}.${fontFileExtension}") format('${fontFileFormat}');
                font-weight: ${fontWeight};
                font-style: normal;
            }\r\n`, cb);
          newFileOnly = fontFileName;
        }
      }
    } else {
      // если файл есть, выводим сообщение 
      console.log("Файл scss/fonts.scss уже существует. Для обновления файла его нужно удалить")
    }
}});

return app.gulp.src(`${app.path.srcFolder}`);
function cb() {}

}