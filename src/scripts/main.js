'use strict';

const employeesList = document.querySelectorAll('li');
const sortedArray = getEmployees(sortList(employeesList));
const ul = document.querySelector('ul');

function transformSalary(employee) {
  return +employee.dataset.salary.split(',').join('').slice(1);
}

function sortList(list) {
  return [...list].sort((employee1, employee2) => {
    const first = transformSalary(employee1);
    const second = transformSalary(employee2);

    return second - first;
  });
}

function getEmployees(list) {
  const employeesArr = [];

  for (const item of list) {
    const obj = {
      named: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employeesArr.push(obj);
  }

  return employeesArr;
}

ul.innerHTML = `
  ${sortedArray.map(({ named, position, salary, age }) => `
  <li
    data-position="${position}"
    data-salary="${salary}"
    data-age="${age}"
  >
    ${named}
  </li>
  `).join('')}
`;
