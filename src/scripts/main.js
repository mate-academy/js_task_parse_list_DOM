'use strict';

// write code here
const ul = document.querySelector('ul');
const lis = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortSalary = list.sort((x, y) => {
    const salaryX = +x.dataset.salary.replace(/[$,]/g, '');
    const salaryY = +y.dataset.salary.replace(/[$,]/g, '');

    return salaryY - salaryX;
  });

  return sortSalary;
}

function getEmployees(list) {
  return ul.append(...sortList(list));
}

getEmployees(lis);
