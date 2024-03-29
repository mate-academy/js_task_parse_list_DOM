'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');

// Функція для перетворення рядка на число
const toNumber = (str) => parseFloat(str.slice(1).replaceAll(',', ''));

const sortList = () => {
  [...employees]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach((employee) => list.append(employee));
};

const getEmployees = () =>
  [...employees].map((person) => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

sortList();
getEmployees();
