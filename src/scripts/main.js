'use strict';

const employees = [...document.querySelectorAll('li')];
const listResult = document.querySelector('ul');

const sortList = (list) => {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));
  listResult.append(...list);
};

const toNumber = (str) => str.split(',').join('').replace('$', '');

const getEmployees = (list) => {
  return list.map(element => (
    {
      name: element.innerHTML.trim(),
      ...element.dataset,
    }
  ));
};

sortList(employees);
getEmployees(employees);
