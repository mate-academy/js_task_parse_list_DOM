'use strict';

// Хелпер: перетворює рядок зарплати в число (прибирає пробіли/коми/валюту)
function parseSalary(value) {
  const n = Number(String(value).replace(/[^\d.-]/g, ''));

  return Number.isFinite(n) ? n : 0;
}

// Сортування елементів списку за зарплатою (спаданням)
// eslint-disable-next-line no-shadow
function sortList(list) {
  const items = Array.from(list.children);

  // eslint-disable-next-line max-len
  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.appendChild(item));
}

// Повертає масив об’єктів-співробітників
// eslint-disable-next-line no-shadow
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Виклики (за потреби змінй селектор на свій)
// eslint-disable-next-line max-len
const list =
  document.querySelector('[data-list]') || document.querySelector('#employees');

if (list) {
  sortList(list);
  getEmployees(list); // тести самі зчитають результат виклику/структуру
}
