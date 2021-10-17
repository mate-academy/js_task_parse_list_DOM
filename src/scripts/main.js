'use strict';

const u = document.querySelector('ul');

function sortList(list) {
  const listSort = [...list.children].sort((a, b) => {
    function GetNumSalary(item) {
      return Number(item.dataset.salary.slice(1).split(',').join(''));
    }

    return GetNumSalary(b) - GetNumSalary(a);
  });

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let i = 0; i < listSort.length; i++) {
    list.append(listSort[i]);
  }
}
sortList(u);

function getEmployees(list) {
  const allEmployees = [...list.children];
  const result = [];

  allEmployees.forEach(item => {
    result.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return result;
}
getEmployees(u);
