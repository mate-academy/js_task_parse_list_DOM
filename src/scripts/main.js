'use strict';

const employeeList = document.querySelector('ul');

function parseSalary(salaryString) {
  const signFree = salaryString.split('$').join('');
  const commaFree = signFree.split(',').join('');

  return Number(commaFree);
}

function sortList(list) {
  const listItemsToSort = [...list.children];

  listItemsToSort.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.replaceChildren(...listItemsToSort);
}

function getEmployees(list) {
  const listItems = [...list.children];
  const employees = listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: item.dataset.age,
  }));

  return employees;
}

sortList(employeeList);
getEmployees(employeeList);
