'use strict';

const employeeList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const convertToNumber = salary => +salary.slice(1).split(',').join('');

  const sortedList = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  employeeList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
