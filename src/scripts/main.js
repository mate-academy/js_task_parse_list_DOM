'use strict';

function parseSalary(value) {
  return parseInt(value.replace(/[$,]/g, ''), 10);
}

function sortList(list) {
  const sortedList = Array.from(list.querySelectorAll('li'));

  sortedList.sort((a, b) => {
    const aValue = parseSalary(a.dataset.salary);
    const bValue = parseSalary(b.dataset.salary);

    return bValue - aValue;
  });

  sortedList.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const employees = Array.from(list.querySelectorAll('li')).map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };
  });

  return employees;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
