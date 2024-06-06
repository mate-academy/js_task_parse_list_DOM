'use strict';

const list = document.querySelector('ul');

function convertSalaryToNumber(salaryString) {
  return parseInt(salaryString.replace(/\D/g, ''), 10);
}

function sortList(listArg) {
  const listItems = Array.from(listArg.children);

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => listArg.appendChild(item));
}

function getEmployees(listArg) {
  const listItems = Array.from(listArg.children);
  const currentEmployees = listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertSalaryToNumber(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));

  return currentEmployees;
}

sortList(list);
getEmployees(list);
