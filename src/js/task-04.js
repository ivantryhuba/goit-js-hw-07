'use strict';
// !Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// !Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// !Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// !Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// Находим блок счетчика
const findCounter = document.querySelector('#counter');

// Создаём объект из елементов счётчика
const refs = {
  value: findCounter.querySelector('#value'),
  decrementBtn: findCounter.querySelector('[data-action="decrement"]'),
  incrementBtn: findCounter.querySelector('[data-action="increment"]'),
};

// Создаем переменную для хранения данных счётчика
let counterValue = 0;

// Проверяем что насоздавали
console.log(refs.value);
console.log(refs.decrementBtn);
console.log(refs.incrementBtn);
console.log(counterValue);

// Создаем функции с которих возвращаем текстовый контент счетчика
//* Функция декремента(-)
const decrement = () => {
  counterValue -= 1;
  return (refs.value.textContent = counterValue);
};
//* Функция инкремента(+)
const increment = () => {
  counterValue += 1;
  return (refs.value.textContent = counterValue);
};

// Вешаем слушатели событий на кнопки
refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);
