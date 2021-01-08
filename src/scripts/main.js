'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertSalary(salary) {
  return salary.replace(/\D/g, '');
}

function sortList(list, convert) {
  const sortedList = [...list].sort((a, b) =>
    convert(b.dataset.salary) - convert(a.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(employer =>
    ({
      name: employer.innerText,
      position: employer.dataset.position,
      salary: employer.dataset.salary,
      age: employer.dataset.age,
    })
  );
}

sortList(employees, convertSalary);
getEmployees(employees);
