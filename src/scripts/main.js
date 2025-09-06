'use strict';

function getSalary(item) {
  const salaryString = item.dataset.salary;
  const cleanedString = salaryString.replace(/[$,]/g, '');

  return Number(cleanedString);
}

function getEmployees(parentList) {
  const items = parentList.querySelectorAll('li');
  const employeesArray = [...items];
  const employeeObjects = employeesArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    };
  });

  return employeeObjects;
}

function sortList(parentList) {
  const items = Array.from(parentList.children);
  const ar = items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  ar.forEach((item) => {
    parentList.appendChild(item);
  });
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
