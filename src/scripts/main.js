'use strict';

const listTag = document.querySelector('ul');
const data = [...document.querySelectorAll('li')];

function getSalary(employee) {
  return Number(employee.getAttribute('data-salary').replace(/[^\w\s]|_/g, ''));
}

function getEmployees() {
  const arrayOfEmployees = [];

  data.forEach((employee) => {
    employee.remove();

    arrayOfEmployees.push({
      name: employee.innerHTML.trim(),
      position: employee.getAttribute('data-position').trim(),
      salary: getSalary(employee),
      age: Number(employee.getAttribute('data-age')),
    });
  });

  return arrayOfEmployees;
}

function sortList(list) {
  return [...list].sort((a, b) => b.salary - a.salary);
}

const employees = sortList(getEmployees());

employees.forEach((employee) => {
  const li = document.createElement('li');

  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', `$${employee.salary.toLocaleString('en-US')}`);
  li.setAttribute('data-age', employee.age.toString());
  li.innerText = employee.name;
  listTag.append(li);
});
