'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const stringToNumber = (string) =>
  +string.replace(/[^0-9]/g, '');

function sortedList(list) {
  return list.sort(
    (a, b) => stringToNumber(b.dataset.salary)
    - stringToNumber(a.dataset.salary)
  );
}

function getEmployees(list) {
  return list.map(element => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
}

sortedList(employees).forEach(element => {
  employeesList.append(element);
});

sortedList(employees);
getEmployees(employees);
