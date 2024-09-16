'use strict';

const listElement = document.querySelector('ul');

const parseSalary = (salary) => {
  const parsedSalary = salary.replace('$', '').replace(',', '');

  return +parsedSalary;
};

const sortList = (list) => {
  const listElements = [...list.children];

  listElements.sort((a, b) =>
    parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  list.innerHTML = '';

  listElements.forEach((element) => list.appendChild(element));
};

const getEmployees = (list) => {
  return [...list.children].map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList(listElement);
getEmployees(listElement);
