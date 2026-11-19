'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  const cleanString = item.dataset.salary.slice(1).split(',').join('');

  return Number(cleanString);
}

function getAge(item) {
  return Number(item.dataset.age);
}

function getPosition(item) {
  return item.dataset.position;
}

function sortList(element) {
  const items = Array.from(element.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));

  element.append(...items);
}

function getEmployees(element) {
  return Array.from(element.children).map((item) => ({
    name: item.textContent.trim(),
    position: getPosition(item),
    salary: getSalary(item),
    age: getAge(item),
  }));
}

sortList(list);

getEmployees(list);
