'use strict';

const lists = document.querySelector('ul');
const listItem = lists.querySelectorAll('li');
const employees = [...listItem];

function num(number) {
  return +number.slice(1).split(',').join('');
};

function sortList(list) {
  const sort = list.sort((a, b) =>
    num(b.dataset.salary) - num(a.dataset.salary)
  );

  lists.innerHTML = '';

  for (const li of sort) {
    lists.appendChild(li);
  }
};

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

getEmployees(employees);
sortList(employees);
