'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(employeeList) {
  const salary = employeeList.sort((
    a, b) => +b.dataset.salary.split('$').join('').split(',').join('')
    - +a.dataset.salary.split('$').join('').split(',').join(''));

  for (const item of salary) {
    ul.append(item);
  }

  return ul;
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
