'use strict';

const list = document.body.querySelector('ul');

class Employee {
  constructor(boss, position, salary, age) {
    this.name = boss;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function sortList() {
  const employeesArr = [ ...list.children ];
  let resultString = '';

  employeesArr.sort((a, b) => {
    return Number(b.dataset.salary.substring(1).replaceAll(',', ''))
    - Number(a.dataset.salary.substring(1).replaceAll(',', ''));
  });

  for (const li of employeesArr) {
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

  for (const li of [ ...list.children ]) {
    const employee = new Employee(li.innerText, li.dataset.position,
      li.dataset.salary, li.dataset.age);

    employeesArray.push(employee);
  }

  return employeesArray;
}

sortList();
getEmployees();
