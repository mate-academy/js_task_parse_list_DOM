'use strict';

const ulItem = document.querySelector('ul');

function sortList(list) {
  const employees = [...list.children];

  employees.sort((a, b) => {
    return convertToNumber(b.dataset.salary)
      - convertToNumber(a.dataset.salary);
  })
    .map(person => ulItem.append(person));

  return employees;
};

function convertToNumber(salary) {
  return Number(salary.split('$').join('').replaceAll(',', ''));
};

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map(person => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(ulItem);

getEmployees(ulItem);
