'use strict';

// write code here
function listOfAll() {
  return document.querySelectorAll('ul li');
}

// Функція для очищення зарплати та перетворення її в число
function getData(item) {
  const salary = item.getAttribute('data-salary');

  return Number(salary.replace(/[$,]/g, '')); // Видаляємо `$` і `,`
}

function sortList(list) {
  const sorted = Array.from(list).sort((a, b) => getData(b) - getData(a));
  const parent1 = list[0].parentNode;

  sorted.forEach((item) => parent1.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(), // Додаємо name з тексту <li>
    position: item.getAttribute('data-position'),
    salary: getData(item),
    age: Number(item.getAttribute('data-age')),
  }));
}

const one = listOfAll();

sortList(one);

const two = getEmployees(one);

// eslint-disable-next-line no-console
console.log(two);
