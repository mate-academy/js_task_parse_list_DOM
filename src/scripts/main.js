'use strict';

const employees = [...document.querySelectorAll('li')];
const listOfEmployees = document.querySelector('ul');

function convert(string) {
  return Number(string.replace(/[^0-9]/g, ''));
}

function sortList(list) {
  return list.sort(
    (previous, next) =>
      convert(next.dataset.salary) - convert(previous.dataset.salary)
  );
}

function getEmployees(list) {
  return list.map(element => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

sortList(employees).forEach(element => {
  listOfEmployees.append(element);
});

sortList(employees);
getEmployees(employees);
