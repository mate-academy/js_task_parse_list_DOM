'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(employeeList) {
  const sortedEmployees = employeeList.sort((
    a, b) => +b.dataset.salary.split('$').join('').split(',').join('')
    - +a.dataset.salary.split('$').join('').split(',').join(''));

  ul.append(...sortedEmployees);
}

function getEmployees(employeeList) {
  return employeeList.map(item => (
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  ));
}

sortList(list);
getEmployees(list);
