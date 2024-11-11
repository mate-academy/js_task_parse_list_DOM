'use strict';

const ul = document.querySelector('ul');
const list = [...ul.querySelectorAll('li')];

function toNumber(str) {
  return +str.replace(/['$']/g, '').replace(/[',']/g, '.');
}

function sortList() {
  list.sort(
    (li1, li2) => toNumber(li2.dataset.salary) - toNumber(li1.dataset.salary),
  );

  for (const li of list) {
    ul.append(li);
  }
}

function getEmployees() {
  return list.map((elem) => ({
    name: elem.textContent,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  }));
}

sortList();
getEmployees();
