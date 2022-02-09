'use strict';

const initialList = document.querySelector('ul');
const employees = [...initialList.children];

for (const el of employees) {
  el.dataset.salary.substr(1);
}

function sortList(list) {
  list.sort((a, b) => Number(a.dataset.salary) - Number(b.dataset.salary));
}

function getEmployees(list) {
  return list;
}

sortList(employees);
getEmployees(employees);

// const mass = [];
// const element = document.body[1];
// console.log(mass);
// for (let child of element.children) {
//   mass.push(child.dataset);
//   mass[child.dataset].name = child.textContent;
// }
