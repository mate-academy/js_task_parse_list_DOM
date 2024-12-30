
'use strict';


const lst = document.querySelectorAll('li');

// Функция для преобразования списка <li> в массив объектов
function sortList(list) {
  return Array.from(list).map((element) => ({
    name: element.textContent.trim(),
    position: element.getAttribute('data-position'),
    salary: Number(
      element.getAttribute('data-salary').slice(1).replace(/,/g, ''),
    ),
    age: element.getAttribute('data-age'),
  }));
}

// Преобразуем список <li> в массив объектов
const Newlist = sortList(lst);

// Передаем преобразованный массив объектов в функцию getEmployees
getEmployees(Newlist);

function getEmployees(list) {
  // Создаем копию списка для сортировки
  const listCopy = [...list];

  // Сортируем по зарплате (по убыванию)
  const NewList = listCopy.sort(
    (element1, element2) => element2.salary - element1.salary,
  );

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  for (const item of NewList) {
    const li = document.createElement('li');

    li.textContent = item.name; // Добавляем имя как текст
    li.setAttribute('data-position', item.position);
    li.setAttribute('data-salary', `$${item.salary.toLocaleString()}`);
    li.setAttribute('data-age', item.age);

    ul.appendChild(li);
  }
}
