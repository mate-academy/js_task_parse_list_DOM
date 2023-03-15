'use strict';

const li = document.querySelectorAll('li');

const sortList = (list) => {
  function getNumber(salary) {
    return +salary.slice(1).split(',').join('');
  }

  const sortedList = [...list].sort((a, b) => {
    const aSalary = getNumber(a.dataset.salary);
    const bSalary = getNumber(b.dataset.salary);

    return bSalary - aSalary;
  });

  const ul = document.querySelector('ul');

  sortedList.map(item => ul.appendChild(item));
};

const getEmployees = (list) => {
  return [...list].map(item => item.dataset.name);
};

sortList(li);
getEmployees(li);
