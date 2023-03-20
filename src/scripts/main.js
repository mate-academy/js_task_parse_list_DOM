'use strict';

function convertToNumber(salaryString) {
  return salaryString.slice(1).split(',').join('');
}

function sortList(list) {
  const ul = document.querySelector('ul');
  const employeesData = [...list]
    .sort((person1, person2) =>
      convertToNumber(person2.getAttribute('data-salary'))
      - convertToNumber(person1.getAttribute('data-salary'))
    );

  return ul.append(...employeesData);
}

function getEmployees(list) {
  const employees = [...list]
    .map(person => {
      const { position, salary, age } = person.dataset;
      const employee = {
        name: person.innerText,
        position,
        salary,
        age,
      };

      return employee;
    });

  return employees;
}

sortList(document.querySelectorAll('li'));
getEmployees(document.querySelectorAll('li'));
