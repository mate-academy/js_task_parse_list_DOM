'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function sortList(list) {
  function convertToNumber(string) {
    return +string
      .split('')
      .filter(el => el !== '$' && el !== ',')
      .join('');
  }

  list.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  employeesList.append(...list);
}

function getEmployees(list) {
  const employeesArr = [];

  for (const human of list) {
    const employeeData = {
      name: human.innerHTML.trim(),
      position: human.dataset.position,
      salary: human.dataset.salary,
      age: human.dataset.age,
    };

    employeesArr.push(employeeData);
  }

  return employeesArr;
}

sortList(employees);
getEmployees(employees);

