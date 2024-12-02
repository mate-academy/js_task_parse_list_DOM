'use strict';

const list = document.querySelectorAll('li');

function parseSalary(sallaryString) {
  return Number(sallaryString.replace(/[$,]/g, ''));
}

function sortList(items) {
  const sortedItem = Array.from(items).sort(
    (a, b) =>
      parseSalary(b.getAttribute('data-salary')) -
      parseSalary(a.getAttribute('data-salary')),
  );

  const parentNode = items[0].parentNode;

  sortedItem.forEach((item) => parentNode.appendChild(item));
}

function getEmployees(element) {
  return Array.from(element).map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
}

sortList(list);

getEmployees(list);
