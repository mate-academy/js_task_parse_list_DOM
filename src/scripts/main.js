'use strict';

const employList = document.querySelector('ul');

function convertToNumber(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(list) {
  const sortedList = [...list.children].sort((a, b) => {
    return convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary);
  });

  list.innerHtml = '';
  list.append(...sortedList);
}

function getEmployees(list) {
  const employArray = [...list.children];
  const res = [];

  for (const el of employArray) {
    res.push({
      name: el.innerHtml,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  }

  return res;
}

sortList(employList);
getEmployees(employList);
