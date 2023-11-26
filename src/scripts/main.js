'use strict';

const currentList = document.querySelector('ul');

function sortList(list) {
  const children = [...list.children];

  children.sort((a, b) => {
    return parser(b.dataset.salary) - parser(a.dataset.salary);
  });

  children.forEach(li => list.append(li));
}

function parser(string) {
  return +string.slice(1).split(',').join('');
}

function getEmployees(list) {
  const employees = [];

  for (const employee of [...list.children]) {
    employees.push(
      {
        name: employee.innerText,
        position: employee.dataset.position,
        salary: employee.dataset.salary,
        age: employee.dataset.age,
      }
    );
  }

  return employees;
}

sortList(currentList);
getEmployees(currentList);
