'use strict';

const ul = document.getElementsByTagName('ul')[0];

const items = Array.from(ul.getElementsByTagName('li'));

function normalizeSalary(salary) {
  return parseInt(salary.slice(1).split(',').join(''));
}

function sortList(list) {
  list.sort((a, b) => {
    return (
      normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary)
    );
  });

  ul.innerHTML = '';

  list.forEach((item) => ul.appendChild(item));

  return list;
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.dataset.name,
    position: employee.dataset.position,
    salary: normalizeSalary(employee.dataset.salary),
    age: parseInt(employee.dataset.age),
  }));
}

const sortedList = sortList(items);

getEmployees(sortedList);
