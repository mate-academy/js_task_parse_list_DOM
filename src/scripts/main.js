'use strict';

const employeesList = document.querySelector('ul');

function convertToNumber(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(list) {
  const sortedList = [...list.children].sort((a, b) => {
    return convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary);
  });

  list.innerHtml = '';
  list.append(...sortedList);
}

function getEmployees(list) {
  const employeesArray = [...list.children];
  const result = [];

  for (const element of employeesArray) {
    result.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  }

  return result;
}

sortList(employeesList);
getEmployees(employeesList);
