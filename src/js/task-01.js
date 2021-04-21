'use strict';
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// Находим по ИД нужный узел и выбираем его
const categories = document.querySelector('ul#categories');

// Находим всё количество елементов в нужном узле и получаем массив
const findAllCategories = categories.querySelectorAll('li.item');

// Выводим длинну массива в консоль
console.log(`В списке ${findAllCategories.length} категории`);

// Перебираем каждый элемент, находим его заголовок (текстовый контент) количество внутренних елементов(длинна массива) и  выводим консоль.
findAllCategories.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li').length;

  console.log(`Категория: ${categoryTitle}`);
  console.log(`Количество элементов: ${categoryItems}`);
});
