'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function getEmployees(list) {
  const infoList = [];

  list.forEach(person => {
    const { position, salary, age } = { ...person.dataset };

    infoList.push({
      name: person.textContent.trim(),
      position,
      salary: Number(salary.slice(1).split(',').join('')),
      age,
    });
  });

  return infoList;
}

function toValid(value) {
  return Number(value.slice(1).split(',').join(''));
}

function sortList(list) {
  const sortedList = list.sort(
    (a, b) => toValid(b.dataset.salary) - toValid(a.dataset.salary));

  return sortedList.forEach(el => {
    employeesList.append(el);
  });
}

sortList(employees);
getEmployees(employees);
