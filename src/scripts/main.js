'use strict';

const listItemsGlobal = Array.from(document.querySelectorAll('li'));

function convertSalaryStringToNumber(salaryString) {
  const numericString = salaryString.replace(',', '').replace('$', '');
  const salary = parseFloat(numericString);

  return salary;
}

function sortSalaries(listItems) {
  const salaries = listItems.map((item) => {
    return {
      element: item,
      salary: convertSalaryStringToNumber(item.getAttribute('data-salary')),
    };
  });

  salaries.sort((a, b) => b.salary - a.salary);

  const salaryList = document.querySelector('ul');

  salaryList.innerHTML = '';

  salaries.forEach((item) => {
    salaryList.appendChild(item.element);
  });
}

function getEmployees(listItems) {
  const employees = listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: convertSalaryStringToNumber(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age')),
    };
  });

  return employees;
}

sortSalaries(listItemsGlobal);
getEmployees(listItemsGlobal);
