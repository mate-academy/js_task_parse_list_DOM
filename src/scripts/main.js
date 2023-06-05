'use strict';

const employeesList = document.querySelector('ul');
const employeesArr = [...employeesList.querySelectorAll('li')];

function sortList(list) {
  const sortedList = [...list].sort((a, b) =>
    strToNum(b.dataset.salary) - strToNum(a.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesArr);
getEmployees(employeesArr);

function strToNum(str) {
  return parseFloat(str.replace(/[^0-9.-]/g, ''));
}
