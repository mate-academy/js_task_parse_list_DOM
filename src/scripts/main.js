'use strict';

const list = document.querySelector('ul');
const employeesCollection = list.querySelectorAll('li');

function getEmploees() {
  return [...employeesCollection].map((employee) => ({
    name: employee.innerText,
    age: employee.dataset.age,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
  }));
}

function sortBySalary(employees) {
  list.innerHTML = '';

  employees
    .sort((a, b) => {
      const aSalary = a.salary.slice(1).split(',').join('');
      const bSalary = b.salary.slice(1).split(',').join('');

      return +bSalary - +aSalary;
    })
    .map(({ name: employeeName, age, position, salary }) => {
      const employeeElement = document.createElement('li');

      employeeElement.innerHTML = `
      <li
        data-position=${position}
        data-salary=${salary}
        data-age=${age}
      >
        ${employeeName}
      </li>
    `;
      list.appendChild(employeeElement);
    });
}

const sortedEmployees = getEmploees();

sortBySalary(sortedEmployees);
