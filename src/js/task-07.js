//! Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// Находим в документе слайдер и текст, кторорый будем регулировать ползунком
const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Функция зависимости размера шрифта текста от значения слайдера
const changeFontSize = () => {
  // *Минимум и максимум задал для прикола
  slider.min = 20;
  slider.max = 120;
  text.style.fontSize = slider.value + 'px';
};

// Слушатель на ползунок
slider.addEventListener('input', changeFontSize);
