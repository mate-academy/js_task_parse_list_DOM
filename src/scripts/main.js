'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.children);

const getEmployees = (arr, htmlList) => {
  arr.forEach((item) => htmlList.appendChild(item));
};

const sortList = (arr) => {
  arr.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
    const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

    return salaryB - salaryA;
  });
};

sortList(items);
getEmployees(items, list);
