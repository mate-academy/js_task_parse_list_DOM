'use strict';

const employeesWrapper = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list, convert) {
  const sortedList = [...list].sort((empA, empB) =>
    convert(empB.dataset.salary) - convert(empA.dataset.salary));

  employeesWrapper.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(employer =>
    ({
      name: employer.textContent,
      position: employer.dataset.position,
      salary: employer.dataset.salary,
      age: employer.dataset.age,
    })
  );
}

function replaceSalary(salary) {
  return salary.replace(/\D/g, '');
}

sortList(employees, replaceSalary);
getEmployees(employees);
