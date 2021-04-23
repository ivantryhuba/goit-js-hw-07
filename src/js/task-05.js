'use strict'
// !Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// Находим инпут и место передачи инфо с инпута
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// Создали функцию вывода инпута в заголовок
const onInputChange = event => {
    outputEl.textContent = event.currentTarget.value;
    console.log(outputEl.textContent);
};

// Слушатель на инпут
inputEl.addEventListener('input', onInputChange);