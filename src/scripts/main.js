'use strict';

// helper function
function createNumber(wage) {
  return Number(wage.replace(/\$|,/g, ''));
}

function sortList(list) {
  const wageList = Array.from(list.children);

  const sortedSalaries = wageList.sort((a, b) => {
    const salaryA = createNumber(a.getAttribute('data-salary'));
    const salaryB = createNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  sortedSalaries.forEach((salary) => {
    list.appendChild(salary);
  });
}

function getEmployees(list) {
  return list.children.map((li) => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: li.getAttribute('data-salary'),
    age: parseInt(li.getAttribute('data-age')),
  }));
}

const employees = document.querySelector('ul');

sortList(employees);

getEmployees(employees);
