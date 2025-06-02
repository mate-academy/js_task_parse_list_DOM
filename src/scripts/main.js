'use strict';

const employeesList = document.querySelectorAll('li');
const listContent = document.querySelector('ul');

function convertToNumber(string) {
  return Number(string.replace(/[$,]/g, ''));
}

function getEmployees(employees) {
  return [...employees].map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: convertToNumber(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
}

function sortList(employees) {
  const employeesArr = [...employees];

  employeesArr.sort((a, b) => {
    const salaryA = convertToNumber(a.getAttribute('data-salary'));
    const salaryB = convertToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listContent.innerHTML = '';

  employeesArr.forEach((item) => listContent.appendChild(item));
}

getEmployees(employeesList);
sortList(employeesList);
