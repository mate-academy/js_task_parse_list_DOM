'use strict';

const employees = [...document.querySelectorAll('ul li')];

const normSalary = (salary) => {
  return Number(salary.replace(/[$,]/g, ''));
};

const sortList = (list) => {
  list.sort((a, b) => {
    return normSalary(b.dataset.salary) - normSalary(a.dataset.salary);
  });

  const ul = document.querySelector('ul');

  for (const li of list) {
    ul.appendChild(li);
  }
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
