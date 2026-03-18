'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];

const getSolary = (li) => {
  return Number(li.dataset.salary.replace(/[$,]/g, ''));
};

function sortList(list) {
  const newList = list.sort((a, b) => {
    return getSolary(b) - getSolary(a);
  });

  newList.forEach((el) => document.querySelector('ul').append(el));

  return newList;
}

function getEmployees(list) {
  return list.map((el) => {
    return {
      name: el.textContent,
      position: el.dataset.position,
      salary: getSolary(el),
      age: Number(el.dataset.age),
    };
  });
}

getEmployees(sortList(employees));

// console.table(getEmployees(sortList(employees)));
