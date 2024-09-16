'use strict';

const employeesList = [...document.querySelectorAll('li')];
const listParent = document.querySelector('ul');

function sortList(list) {
  const copyList = [...list];

  copyList.sort((a, b) => {
    return normalize(b.dataset.salary) - normalize(a.dataset.salary);
  });

  copyList.forEach(element => listParent.append(element));
}

function normalize(item) {
  return Number(item.replace(/[$,]/g, ''));
}

sortList(employeesList);

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

getEmployees(employeesList);
