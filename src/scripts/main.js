'use strict';

// write code here
const employeesList = document.querySelector('ul');

function makeNumber(array) {
  return Number(array.replaceAll(',', '').replaceAll('$', ''));
}

function sortList(list) {
  const listArray = Array.from(list.querySelectorAll('li'));

  listArray.sort((a, b) => {
    const salaryA = makeNumber(a.dataset.salary);
    const salaryB = makeNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  for (const element of listArray) {
    list.append(element);
  }

  return list;
}

function getEmployees(list) {
  const listArray = Array.from(list.querySelectorAll('li'));
  const employeesArray = [];

  for (const employee of listArray) {
    const newObject = {};

    newObject.name = employee.textContent.trim();
    newObject.position = employee.dataset.position;
    newObject.salary = makeNumber(employee.dataset.salary);
    newObject.age = employee.dataset.age;
    employeesArray.push(newObject);
  }

  return employeesArray;
}

sortList(employeesList);
getEmployees(employeesList);
