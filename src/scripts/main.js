'use strict';

const employeesList = [...document.querySelectorAll('[data-position]')];

function sortList(items) {
  const sortedList = items
    .filter((item) => item.dataset.salary)
    .sort((a, b) => {
      const salaryA = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
      const salaryB = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

      return salaryB - salaryA;
    });

  const parentElem = items[0].parentElement;

  parentElem.innerHTML = '';

  sortedList.forEach((el) => {
    parentElem.appendChild(el);
  });
}

function getEmployees(items) {
  const result = [];

  items.forEach((item) => {
    const data = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(data);
  });

  return result;
}

sortList(employeesList);

getEmployees(employeesList);
