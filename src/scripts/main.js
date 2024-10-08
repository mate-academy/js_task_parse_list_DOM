'use strict';

const allSalary = document.querySelectorAll('[data-position]');
const listParent = allSalary[0].parentElement;

function sortList(list) {
  const sorting = [...list];

  sorting.sort((a, b) => {
    function getSalary(elem) {
      return +elem.dataset.salary.slice(1).replace(',', '.');
    }

    return getSalary(b) - getSalary(a);
  });

  return sorting;
}

const sortedList = sortList(allSalary);

listParent.innerHTML = null;

for (const elem of sortedList) {
  listParent.appendChild(elem);
}

function getEmployees(list) {
  const newList = [];

  for (const elem of list) {
    newList.push({
      name: elem.outerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    });
  }

  return newList;
}

getEmployees(allSalary);
