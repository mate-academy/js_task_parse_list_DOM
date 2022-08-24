'use strict';

function sortList(list) {
  return list.sort((prev, next) => (
    getNumber(next.dataset.salary) - getNumber(prev.dataset.salary)));
}

function getNumber(str) {
  return +str.replace(/\D/g, '');
}

function getEmployees(list) {
  return list.map(employee => (
    {
      name: employee.innerText,
      ...employee.dataset,
    }
  ));
}

const employeesList = [...document.querySelectorAll('li')];

getEmployees(sortList(employeesList));

employeesList.forEach(employee => {
  document.querySelector('ul').append(employee);
});
