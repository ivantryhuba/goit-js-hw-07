'use strict';
// !Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// !Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// !Каждый созданный div:

// !Имеет случайный rgb цвет фона
// !Размеры самого первого div - 30px на 30px
// !Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// !Создай функцию destroyBoxes(), которая очищает div#boxes.

// Находим елементы взаимодействия
const controlsEl = document.querySelector('#controls');
const inputStr = controlsEl.querySelector('input');
const renderBtn = controlsEl.querySelector('[data-action="render"]');
const destroyBtn = controlsEl.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

// Очистка
function destroyBlocks() {
  inputStr.value = '';
  boxesEl.innerHTML = '';
}

// Рандомный цвет
function getRandomColor(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// Рендер блоков
const createBlocks = () => {
  const amount = Number(inputStr.value);
  const allBlocks = [];

  for (let i = 0; i < amount; i += 1) {
    const blockEl = document.createElement('div');
    blockEl.style.width = `${30 + i * 10}px`;
    blockEl.style.height = `${30 + i * 10}px`;
    blockEl.style.backgroundColor = `rgb(
          ${getRandomColor(0, 255)}, 
          ${getRandomColor(0, 255)}, 
          ${getRandomColor(0, 255)}
        )`;
      allBlocks.push(blockEl);
      console.log(allBlocks);
  }
  boxesEl.append(...allBlocks);
};

// Слушатели на кнопки
renderBtn.addEventListener('click', createBlocks);
destroyBtn.addEventListener('click', destroyBlocks);
