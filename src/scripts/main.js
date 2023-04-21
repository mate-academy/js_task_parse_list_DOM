'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function convertSalary(salary) {
  return parseInt(salary.replace(/[$,]/g, ''));
}

function sortList(salary) {
  const listItems = [...li];

  listItems.sort((a, b) => {
    const aSalary = convertSalary(a.getAttribute(`data-${salary}`));
    const bSalary = convertSalary(b.getAttribute(`data-${salary}`));

    return bSalary - aSalary;
  });

  listItems.forEach(item => ul.append(item));
}

function getEmployees(salary) {
  return li.map(item => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: convertSalary(item.getAttribute(`data-${salary}`)),
    age: parseInt(item.getAttribute('data-age')),
  }));
}

sortList('salary');
getEmployees('salary');
