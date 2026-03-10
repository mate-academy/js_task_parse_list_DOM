'use strict';

const listOfPeople = document.querySelector('ul');

function getSalary(element) {
  const digitsOnly = element.dataset.salary.replace(/\D/g, '');

  return Number(digitsOnly);
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(listOfPeople);

getEmployees(listOfPeople);
