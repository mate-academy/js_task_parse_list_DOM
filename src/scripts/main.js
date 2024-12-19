'use strict';

const employeeList = document.querySelector('body ul');

function convertToNumber(stringSalary) {
  return parseFloat(stringSalary.replace(/[^\d.-]/g, ''));
}

function sortList(list) {
  const itemsList = [...list.children];

  itemsList.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  itemsList.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((i) => ({
    name: i.dataset.name,
    position: i.dataset.position,
    salary: convertToNumber(i.dataset.salary),
    age: convertToNumber(i.dataset.age),
  }));
}
sortList(employeeList);
getEmployees(employeeList);
