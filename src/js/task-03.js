'use strict';
// !Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// !Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// !Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// *Находим галерею
const galleryEl = document.querySelector('ul#gallery');

// *Создаем шаблонную строку, в которой прописываем разметку картики и возвращаем ее
const createImageEl = image => {
  const imageItem = `<li class="item"><img class="image" src="${image.url}" alt="${image.alt}"></li>`;
  return imageItem;
};

// *Возвращаем массив картинок, применив к ним коллбек и делаем строку
const makeImagesCollection = images.map(createImageEl).join(' ');

// *Вставляем разметку картинок в галерею
const createGallery = galleryEl.insertAdjacentHTML(
  'afterbegin',
  makeImagesCollection,
);
