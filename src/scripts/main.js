'use strict';

// write code here
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const sortedList = [...list].sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  sortedList.forEach((li) => ul.appendChild(li));
}

function getEmployees(list) {
  return [...list].map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.getAttribute('data-position'),
      salary: parseSalary(li.getAttribute('data-salary')),
      age: Number(li.getAttribute('data-age')),
    };
  });
}

const listItems = document.querySelectorAll('ul li');

sortList(listItems);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(listItems);
