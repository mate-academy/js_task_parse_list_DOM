'use strict';

function salaryParsingHelper(data, attribute) {
  return parseFloat(data.getAttribute(attribute).replace(/[$|,]/g, ''));
}

function sortEmployees() {
  const listItems = document.querySelectorAll('ul li');

  const sortedItems = Array.from(listItems).sort((a, b) => {
    const salaryA = salaryParsingHelper(a, 'data-salary');
    const salaryB = salaryParsingHelper(b, 'data-salary');

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  sortedItems.forEach((item) => ul.appendChild(item));
}

function getEmployees() {
  const listItems = document.querySelectorAll('ul li');

  const employees = Array.from(listItems).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: salaryParsingHelper(item, 'data-salary'),
      age: parseInt(item.getAttribute('data-age')),
    };
  });

  return employees;
}

sortEmployees();
getEmployees();
