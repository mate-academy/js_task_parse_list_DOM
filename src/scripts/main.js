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
      ...employe.dataset,
    };
  });

  return employees;
};

getEmployees(elements);
sortList(elements);
