'use strict';

const employeeList = document.querySelectorAll('li');
const ulList = document.querySelector('ul');

function sortList(list) {
  const arr = [...list];
  const salaryToNumber = (text) => {
    return +text.slice(1).replace(/,/g, '');
  };

  arr.sort((x, y) =>
    salaryToNumber(y.dataset.salary)
    - salaryToNumber(x.dataset.salary));

  ulList.append(...arr);
}

function getEmployees(list) {
  const employees = [];
  const arr = [...list];

  for (const person of arr) {
    employees.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employees;
}

sortList(employeeList);
getEmployees(employeeList);
