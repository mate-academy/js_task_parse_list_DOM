'use strict';

const salary = [...document.querySelectorAll('[data-salary]')];
const ul = document.querySelector('ul');
const children = Array.from(ul.childNodes);

function sortList(list) {
  return list.sort((first, second) => {
    const a = first.salary;
    const b = second.salary;

    if (a === b) {
      return list.indexOf(b) - list.indexOf(a);
    }

    return b - a;
  });
}

function getEmployees(list) {
  const arrList = list.map((el) => ({
    element: el.innerHTML,
    salary: el.getAttribute('data-salary')
      ? +el.getAttribute('data-salary').slice(1).split(',').join('')
      : 0, // Встановлюємо значення 0, якщо атрибут відсутній
  }));

  // Видаляємо всі елементи з списку
  children.forEach((child) => ul.removeChild(child));

  const sortArr = sortList(arrList);

  sortArr.forEach((el) => {
    const newLi = document.createElement('li');

    newLi.textContent = el.element;
    ul.appendChild(newLi);
  });

  return arrList;
}

getEmployees(salary);
