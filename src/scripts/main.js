'use strict';

// write code here
const list = document.querySelector('ul');

function normalizeSalary(str) {
  return +str.replace(/[$,]/g, '');
}

function sortList(listToSort) {
  const sorted = [...listToSort.children].sort((personA, personB) => (
    normalizeSalary(personB.dataset.salary)
    - normalizeSalary(personA.dataset.salary)
  ));

  list.append(...sorted);
}

function getEmployees(employees) {
  return [...employees.children].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
