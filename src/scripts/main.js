'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function toNum(string) {
  return (string.replace(/\D/g, ''));
}

function sortList(list) {
  list.sort((cur, next) => {
    return toNum(next.dataset.salary) - toNum(cur.dataset.salary);
  });
  employeesList.append(...list);
};

function getEmployees(list) {
  return {
    name: list.innerHTML,
    ...list,
  };
};

sortList(employees);
getEmployees(employees);
