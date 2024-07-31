'use strict';

const listUl = document.querySelector('ul');

function convertToNumber(num) {
  return Number(num.slice(1).replace(/,/g, ''));
}

function sortList(list) {
  listUl.innerHTML = '';

  const sorted = list.sort(
    (a, b) => convertToNumber(a.salary) - convertToNumber(b.salary),
  );

  sorted.forEach((person) => {
    const liItem = document.createElement('li');

    liItem.textContent = person.name.trim();
    liItem.dataset.position = person.position;
    liItem.dataset.salary = person.salary;
    liItem.dataset.age = person.age;
    listUl.prepend(liItem);
  });
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    position: item.dataset.position,
    name: item.textContent,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

const liItems = document.querySelectorAll('li');

if (liItems.length) {
  const employees = getEmployees(liItems);

  sortList(employees);
}
