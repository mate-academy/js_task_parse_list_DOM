'use strict';

// write code here

const ulList = document.querySelector('ul');
const employeesList = [...document.querySelectorAll('li')];

function helper(value) {
  return +value.replace(/[$,]/g, '');
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => {
    employees.push({
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: helper(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age')),
    });
  });

  return employees;
}

function sortList(list) {
  const sortedList = list.sort((employee1, employee2) => {
    return (
      helper(employee2.getAttribute('data-salary')) -
      helper(employee1.getAttribute('data-salary'))
    );
  });

  sortedList.forEach((element) => ulList.appendChild(element));
}

sortList(employeesList);
getEmployees(employeesList);
