'use strict';

const fullList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const toNumber = salary => +salary.slice(1).replace(/,/g, '');
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  fullList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
