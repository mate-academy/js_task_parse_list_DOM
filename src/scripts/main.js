'use strict';

const list = document.querySelector('ul');

function getSalaryNum(salary) {
  return +salary.slice(1).replace(',', '');
}

function sortList(listToSort) {
  const items = Array.from(listToSort.children);

  items.sort((a, b) => {
    return getSalaryNum(b.dataset.salary) - getSalaryNum(a.dataset.salary);
  });

  items.forEach((item) => {
    listToSort.appendChild(item);
  });
}

function getEmployees(listOfEmployees) {
  const items = Array.from(listOfEmployees.children);

  return items.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
