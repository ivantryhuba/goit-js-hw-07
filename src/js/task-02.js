'use strict';
// !В HTML есть пустой список ul#ingredients.

// !<ul id="ingredients"></ul>
// !В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


// *Находим список
const ingredientsList = document.querySelector('ul#ingredients');

// *Пишем функцию, которая создает элемент списка, напоняет его текстом и возвращает его
const ingredientItem = ingredient => {
  const makeIngredientItem = document.createElement('li');
  makeIngredientItem.textContent = ingredient;
  return makeIngredientItem;
};

// *Создаем массив элементов списка
const items = ingredients.map(ingredientItem);

// *Добавляем элементы списка в разметку
ingredientsList.append(...items);
