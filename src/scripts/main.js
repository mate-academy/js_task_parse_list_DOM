'use strict';

const listEl = document.querySelector('ul');

const sortList = (list) => {
  [...list.querySelectorAll('li')]
    .sort((a, b) => b.dataset.salary.slice(1).replace(',', '')
    - a.dataset.salary.slice(1).replace(',', ''))
    .forEach(li => list.appendChild(li));
};

const getEmployees = (list) => {
  const employees = [];

  [...list.querySelectorAll('li')]
    .forEach(li => employees.push({
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    }));

  return employees;
};

sortList(listEl);
getEmployees(listEl);
