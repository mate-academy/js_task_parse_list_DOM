'use strict';

const listWorkers = document.querySelector('ul');
const items = [...document.querySelectorAll('li')];

function convertStrToNumber(num) {
  return +num.replace(',', '');
}

const sortList = (elements, list) => {
  elements.sort(
    (a, b) =>
      convertStrToNumber(b.dataset.salary.slice(1)) -
      convertStrToNumber(a.dataset.salary.slice(1)),
  );

  list.innerHTML = '';
  elements.forEach((item) => listWorkers.appendChild(item));
};

const getEmployees = (list) => {
  const employees = [];

  for (const item of list) {
    employees.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return employees;
};

sortList(items, listWorkers);
getEmployees(items);
