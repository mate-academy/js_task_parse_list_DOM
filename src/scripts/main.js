'use strict';

const employees = [...document.querySelectorAll('ul li')];
const ul = document.querySelector('ul');

const normSalary = (salary) => {
  return Number(salary.replace(/\D/g, ''));
};

const sortList = (list) => {
  list.sort((a, b) => {
    return normSalary(b.dataset.salary) - normSalary(a.dataset.salary);
  });

  list.forEach((li) => ul.appendChild(li));
};

const getEmployees = (list) => {
  return list.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: normSalary(li.dataset.salary),
    age: +li.dataset.age,
  }));
};

sortList(employees);
getEmployees(employees);
