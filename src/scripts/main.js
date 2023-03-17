'use strict';

function convertToNumber(SalaryString) {
  return SalaryString.slice(1).split(',').join('');
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
      const employee = {};

      employee.name = person.innerText;
      employee.position = person.dataset.position;
      employee.salary = person.dataset.salary;
      employee.age = person.dataset.age;

      return employee;
    });

  return employees;
}

sortList(document.querySelectorAll('li'));
getEmployees(document.querySelectorAll('li'));
