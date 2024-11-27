'use strict';

const list = document.querySelector('ul');

function convertNumber(input) {
  const convertedNumber = +input.slice(1).replace(',', '');

  return convertedNumber;
}

function sortList(items) {
  const itemsList = [...items.children];

  const sortedItems = itemsList.sort(
    (a, b) => convertNumber(b.dataset.salary) - convertNumber(a.dataset.salary),
  );

  items.replaceChildren(...sortedItems);
}

function getEmployees(employees) {
  const employeesList = [...employees.children];

  const employeesInObj = employeesList.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return employeesInObj;
}

sortList(list);
getEmployees(list);
