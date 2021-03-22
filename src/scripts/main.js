'use strict';

const employees = document.querySelectorAll('li');
const parentList = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list]
    .sort((a, b) => {
      const aSalary = a.dataset.salary.slice(1).replace(/,/, '');
      const bSalary = b.dataset.salary.slice(1).replace(/,/, '');

      return bSalary - aSalary;
    });

  return sortedList;
}

function getEmployees(list) {
  while (parentList.firstChild) {
    parentList.removeChild(parentList.firstChild);
  }

  for (const item of list) {
    parentList.append(item);
  }
}

const sorted = sortList(employees);

getEmployees(sorted);
