'use strict';

function sortList(list) {
  const items = list.children;
  const sortedList = [...items].sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  list.append(...sortedList);
}

function convertToNumber(textSalary) {
  return +textSalary.replace(/\D/g, '');
}

function getEmployees(list) {
  const items = list.children;
  const employees = [...items].map((person) => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employees;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
