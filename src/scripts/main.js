'use strict';

// write code here
const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);

function sortList(list) {
  const employees = [...list.children];

  const sortedEmployees = employees.sort(
    (item1, item2) =>
      parseSalary(item2.dataset.salary) - parseSalary(item1.dataset.salary),
  );

  for (const item of list.children) {
    item.remove();
  }

  for (const item of sortedEmployees) {
    list.append(item);
  }
}

function getEmployees(list) {
  const employees = [];

  for (const item of list.children) {
    const data = item.dataset;

    employees.push({
      name: item.innerText,
      position: data.position,
      salary: parseSalary(data.salary),
      age: data.age,
    });
  }

  return employees;
}

function parseSalary(salary) {
  return +salary.replaceAll(/,|\$/g, '');
}
