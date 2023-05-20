import './wNumb.js';
import './nouislider.js';

export const createSliderElement = (sliderElement, inputs) => {
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