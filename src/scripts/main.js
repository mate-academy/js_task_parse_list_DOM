'use strict';

const elements = document.querySelectorAll('li');

function getSalaryValue(str) {
  return +str.replace('$', '').replace(',', '');
};

function sortList(list) {
  const sortedList = [...list].sort((a, b) =>
    getSalaryValue(b.dataset.salary) - getSalaryValue(a.dataset.salary)
  );

  document.querySelector('ul').append(...sortedList);
};

function getEmployees(list) {
  const employees = [...list].map(employe => {
    return {
      name: employe.innerText,
      position: employe.dataset.position,
      salary: employe.dataset.salary,
      age: employe.dataset.age,
    };
  });

  return employees;
};

getEmployees(elements);
sortList(elements);
