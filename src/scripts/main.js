'use strict';

// write code here

const employees = document.querySelectorAll('li');
const employeesArray = [];

for (const employee of employees) {
  const employeeObj = {};

  employeeObj.name = employee.innerText;
  employeeObj.position = employee.dataset.position;
  employeeObj.salary = employee.dataset.salary;
  employeeObj.age = employee.dataset.age;

  employeesArray.push(employeeObj);
}

function helperFunction(arr) {
  const result = arr.map((person) =>
    ({
      ...person,
      salary: Number(person.salary.replace(/[$,]/g, '')),
    }));

  return result;
}

function sortList(list) {
  const newArr = helperFunction(list);

  newArr.sort((x, y) => (y.salary - x.salary));

  return newArr;
}

function getEmployees(list) {
  const ul = document.querySelector('ul');

  ul.innerHTML = `
  <ul>
    ${list.map(person => `
      <li
      data-position="${person.position}"
      data-salary="$${person.salary.toLocaleString()}"
      data-age="${person.age}"
      >
        ${person.name}
      </li>
    `).join('')}
  </ul>
  `;
}

const finalArray = sortList(employeesArray);

sortList(employeesArray);
getEmployees(finalArray);
