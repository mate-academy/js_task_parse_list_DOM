'use strict';

class Employee {
  constructor(employeeName, position, salary, age) {
    this.name = employeeName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

function getEmployees(list) {
  const nodeListofLi = document.querySelectorAll(list);
  const arrayOfEmployees = [];

  for (const value of nodeListofLi) {
    const salaryNumber = value.dataset.salary.split(',').join('')
      .replace('$', '');

    arrayOfEmployees.push(new Employee(value.innerText, value.dataset.position,
      salaryNumber, value.dataset.age));
  }

  return arrayOfEmployees;
}

function sortList(list) {
  const arrayOfEmployees = getEmployees(list);

  arrayOfEmployees.sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  ul.remove();

  const h1 = document.querySelector('h1');

  h1.insertAdjacentHTML('afterend', `
    <ul>
    </ul>
  `);

  const ulSelect = document.querySelector('ul');

  for (const employee of arrayOfEmployees) {
    ulSelect.insertAdjacentHTML('beforeend', `
    <li
        data-position=${employee.position}
        data-salary=${employee.salary}
        data-age=${employee.age}
      >
        ${employee.name}
      </li>
    `);
  }
}

sortList('li');
getEmployees('li');
