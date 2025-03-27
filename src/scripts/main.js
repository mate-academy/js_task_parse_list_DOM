'use strict';

const li = document.querySelectorAll('li');

const sortList = (list) => {
  function strToNum(salary) {
    return +salary.slice(1).split(',').join('');
  }

  const sortedList = [...list].sort((a, b) => {
    const aSalary = strToNum(a.dataset.salary);
    const bSalary = strToNum(b.dataset.salary);

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
