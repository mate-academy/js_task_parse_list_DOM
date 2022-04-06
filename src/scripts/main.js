'use strict';

const listUl = document.querySelector('ul');
const employees = document.querySelectorAll('li');

const sortList = (list) => {
  const sortedList = [...list].sort((a, b) => (
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join('')
  ));

  listUl.append(...sortedList);
};

const getEmployees = (list) => {
  return [...list].map((li) => ({
    name: li.textContent,
    ...(li.dataset),
  }));
};

sortList(employees);
getEmployees(employees);
