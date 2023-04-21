'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function convertSalary(salary) {
  return parseInt(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = [...li];

  listItems.sort((a, b) => {
    const aSalary = convertSalary(a.getAttribute(`data-${list}`));
    const bSalary = convertSalary(b.getAttribute(`data-${list}`));

    return bSalary - aSalary;
  });

  listItems.forEach(item => ul.append(item));
}

function getEmployees(list) {
  return li.map(item => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: convertSalary(item.getAttribute(`data-${list}`)),
    age: parseInt(item.getAttribute('data-age')),
  }));
}

sortList('salary');
getEmployees('salary');
