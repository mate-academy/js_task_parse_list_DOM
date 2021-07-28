'use strict';

function sortList(list) {
  const employees = [...list]
    .sort((a, b) => {
      const aSalary = getSalary(a.dataset.salary);
      const bSalary = getSalary(b.dataset.salary);

      return bSalary - aSalary;
    });

  const employeesList = document.querySelector('ul');

  employeesList.innerHTML = '';

  for (const i of employees) {
    employeesList.insertAdjacentElement('beforeEnd', i);
  }

  function getSalary(value) {
    return +(value
      .split('$')
      .join('')
      .split(',')
      .join('')
    );
  }
}

function getEmployees(list) {
  const result = [];

  const employees = [...list];

  for (const i of employees) {
    result.push(
      {
        name: i.innerText,
        position: i.dataset.position,
        salary: i.dataset.salary,
        age: i.dataset.age,
      }
    );
  }

  return result;
}

const listOfEmployees = document.querySelectorAll('li');

sortList(listOfEmployees);
getEmployees(listOfEmployees);
