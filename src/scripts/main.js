'use strict';

const list = document.body.querySelector('ul');
const employees = [ ...list.children ];

class Employee {
  constructor(boss, position, salary, age) {
    this.name = boss;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function validateSalary(string) {
  return string.dataset.salary.substring(1).replaceAll(',', '');
}

function sortList() {
  let resultString = '';

  employees.sort((a, b) => {
    return Number(validateSalary(b)) - Number(validateSalary(a));
  });

  for (const li of employees) {
    resultString += `
    <li
      data-position=${li.dataset.position}
      data-salary=${li.dataset.salary.toString()}
      data-age=${li.dataset.age}
    >
      ${li.innerText}
    </li>
    `;
  }

  list.innerHTML = resultString;
}

function getEmployees() {
  const employeesArray = [];

  for (const li of employees) {
    const employee = new Employee(li.innerText, li.dataset.position,
      li.dataset.salary, li.dataset.age);

    employeesArray.push(employee);
  }

  return employeesArray;
}

sortList();
getEmployees();
