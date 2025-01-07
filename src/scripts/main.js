'use strict';

function parseSalary(salary) {
  return +salary.replace(/[^0-9]/g, '');
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  const sortedItems = items.sort((a, b) => {
    const elementA = parseSalary(a.getAttribute('data-salary'));
    const elementB = parseSalary(b.getAttribute('data-salary'));

    return elementB - elementA;
  });

  list.innerHTML = '';

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    const names = item.textContent.trim();
    const salary = parseSalary(item.getAttribute('data-salary'));

    return { names, salary };
  });
}

const listEmployees = document.querySelector('ul');

sortList(listEmployees);

getEmployees(listEmployees);
