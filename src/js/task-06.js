'use strict'
//! Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// ! Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// ! - Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//! - Для добавления стилей, используй CSS-классы valid и invalid.

// Находим инпут и проверяем длину
const inputEl = document.querySelector('#validation-input');
console.log(inputEl.dataset.length);

// Преобразовуем формат данных по длине (из строки в число)
const inputElLength = Number(inputEl.dataset.length);
console.log(inputElLength);

// Функция валидации
const validation = event => {
  inputEl.classList.add('invalid');
  if (event.currentTarget.value.length === inputElLength) {
    inputEl.classList.add('valid');
    inputEl.classList.toggle('invalid');
  }
};

// Слушаем на инпуте потерю фокуса
inputEl.addEventListener('blur', validation);
