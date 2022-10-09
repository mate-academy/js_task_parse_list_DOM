'use strict';

function conversion(str) {
  return str.dataset.salary.split(',').join('').slice(1, -1);
}

function sotrSalary() {
  const employees = [...document.querySelectorAll('li')]
    .sort((a, b) => conversion(b) - conversion(a));

  const ulElement = document.querySelector('ul');

  ulElement.insertAdjacentHTML('afterend', '<ul></ul>');
  ulElement.append(...employees);
}

sotrSalary();
// Сортирует лишки

function getEmployees() {
  const employees = [...document.querySelectorAll('li')].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return employees;
}

getEmployees();
// Возвращает массив обьектов
