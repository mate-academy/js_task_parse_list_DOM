'use strict';

function sortList(list) {
  list
    .sort((x, y) => {
      const replacedX = x.dataset.salary.replace(/\D/g, '');
      const replacedY = y.dataset.salary.replace(/\D/g, '');

      return replacedY - replacedX;
    });
}

function getEmployees(sortedList, list) {
  sortedList.forEach(person => list.append(person));
}

const employeesList = document.querySelector('ul');
const copy = [...employeesList.children];

sortList(copy);
getEmployees(copy, employeesList);
