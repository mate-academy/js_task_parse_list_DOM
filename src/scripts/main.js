'use strict';

const empoloyees = document.querySelectorAll('[data-salary]');
const list = document.querySelector('ul');

function sortList(colect) {
  const out = Array.from(colect).sort((a, b) => {
    return (
      +cleanCurrency(b.getAttribute('data-salary')) -
      +cleanCurrency(a.getAttribute('data-salary'))
    );
  });

  list.innerHTML = '';

  for (const li of out) {
    list.appendChild(li);
  }
}

function cleanCurrency(input) {
  return input.replace(/[$,]/g, '');
}

// setTimeout(() => sortList(empoloyees), 1000);

sortList(empoloyees);

function addEmployeeInData(colect) {
  const dataEmployees = [];

  Array.from(colect).forEach((employee) => {
    dataEmployees.push({
      name: employee.textContent.trim(),
      position: employee.getAttribute('data-position'),
      salary: employee.getAttribute('data-salary'),
      age: employee.getAttribute('data-age'),
    });
  });

  return dataEmployees;
}

addEmployeeInData(empoloyees);
