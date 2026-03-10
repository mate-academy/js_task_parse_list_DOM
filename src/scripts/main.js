'use strict';

const list = document.querySelector('ul');

function parseSalary(str) {
  const noDollar = str.replace('$', '');
  const noComma = noDollar.replace(/,/g, '');

  return Number(noComma);
}

function sortList(employeeList) {
  const items = employeeList.querySelectorAll('li');
  const itemsArray = Array.from(items);

  itemsArray.sort(function (a, b) {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  itemsArray.forEach(function (item) {
    employeeList.appendChild(item);
  });
}

function getEmployees(employeeList) {
  const items = employeeList.querySelectorAll('li');
  const employees = [];

  items.forEach(function (item) {
    const obj = {
      name: item.textContent,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };

    employees.push(obj);
  });

  return employees;
}

sortList(list);
getEmployees(list);
