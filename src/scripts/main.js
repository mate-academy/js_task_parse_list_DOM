'use strict';

const elements = [...document.querySelectorAll('li')];

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: formatted(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

function formatted(salary) {
  return parseInt(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  return list.sort((a, b) => {
    return b.salary - a.salary;
  });
}

const employees = getEmployees(elements);
const sortedList = sortList(employees);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedList.forEach((employee) => {
  const li = document.createElement('li');

  li.textContent = employee.name;
  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', employee.salary);
  li.setAttribute('data-age', employee.age);
  ul.appendChild(li);
});
