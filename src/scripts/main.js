'use strict';

const employees = document.querySelectorAll('li');
const empList = document.querySelector('ul');

function sortList(list) {
  const sorted = [...list].sort((a, b) => toNum(b.dataset.salary)
  - toNum(a.dataset.salary));

  empList.append(...sorted);
};

function toNum(string) {
  return Number(string.replace(/\D/g, ''));
};

function getEmployees(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push({
      name: list[i].innerText,
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    });
  }

  return result;
}

sortList(employees);
getEmployees(employees);
