'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const sortedEmployeers = Array.from(list.children).sort(
    (el1, el2) =>
      getNumericalValue(el2.dataset.salary) -
      getNumericalValue(el1.dataset.salary),
  );

  list.innetHTML = '';
  sortedEmployeers.forEach((el) => list.appendChild(el));
}

function getNumericalValue(value) {
  const nomalizedValue = value.replaceAll(',', '');

  return parseInt(nomalizedValue.slice(1));
}

function getEmployees(list) {
  return Array.from(list.children).map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
