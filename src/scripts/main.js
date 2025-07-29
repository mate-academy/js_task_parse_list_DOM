'use strict';

const employeeList = document.querySelector('ul');

function getEmployees(ulElement) {
  const items = ulElement.querySelectorAll('li');
  const people = [];

  items.forEach((item) => {
    const person = {
      name: item.textContent,
      position: item.getAttribute('data-position'),
      salary: Number(item.getAttribute('data-salary').replace(/[^\d]/g, '')),
      age: Number(item.getAttribute('data-age')),
    };

    people.push(person);
  });

  return people;
}

function sortListBySalary(ulElement) {
  const items = [...ulElement.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = Number(a.getAttribute('data-salary').replace(/[^\d]/g, ''));
    const salaryB = Number(b.getAttribute('data-salary').replace(/[^\d]/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((item) => ulElement.appendChild(item));
}

sortListBySalary(employeeList);
getEmployees(employeeList);
