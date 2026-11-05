'use strict';

const listToSort = document.querySelector('ul');

function getSalary(item) {
  return Number(item.getAttribute('data-salary').replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(
    (firstItem, secondItem) => getSalary(secondItem) - getSalary(firstItem),
  );

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items, (item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: getSalary(item),
    age: Number(item.getAttribute('data-age')),
  }));
}

sortList(listToSort);

getEmployees(listToSort);
