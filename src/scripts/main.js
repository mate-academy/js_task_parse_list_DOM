'use strict';

// створення масиву елемнтів
const arr = [...document.querySelectorAll('[data-salary]')];

// створення масиву об'єктів за новою схемою
function getEmployees(list) {
  return list.map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: Number(el.dataset.salary.replace(/[$,]/g, '')),
    age: Number(el.dataset.age),
    element: el,
  }));
}

// сортування масиву об'єктів по ЗП
function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

// невідсортований масив нових об'єктів
const employees = getEmployees(arr);

// відсортований масив об'єктів
const sortedEmployees = sortList(employees);

// оновлення DOM, додавання елементів у новому порядку
const ul = document.querySelector('ul');

ul.innerHTML = '';
sortedEmployees.forEach((employee) => ul.appendChild(employee.element));
