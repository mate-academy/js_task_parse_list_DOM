'use strict';

// write code here
function parseSalary(value) {
  return Number(value.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => {
    return {
      name: item.innerText,
      age: item.dataset.age,
      position: item.dataset.position,
      salary: item.dataset.salary,
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
