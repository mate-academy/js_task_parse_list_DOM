'use strict';

const arrayOfEmployees = document.querySelectorAll('li');
const ulElements = document.querySelector('ul');

const sortList = function(list) {
  const result = [ ...list ].sort((a, b) =>
    +b.dataset.salary.slice(1).replace(',', '')
    - +a.dataset.salary.slice(1).replace(',', '')
  );

  ulElements.append(...result);
};

const getEmployees = function(list) {
  return [ ...list ].map(item => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(arrayOfEmployees);
getEmployees(arrayOfEmployees);
