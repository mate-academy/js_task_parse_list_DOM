'use strict';

const listOfEmployees = document.querySelector('ul');
const itemsArray = Array.from(listOfEmployees.children);

function getSalary(element) {
  const number = element.getAttribute('data-salary').replaceAll('$', '');

  return parseFloat(number.replaceAll(',', ''));
}

function sortList() {
  itemsArray.sort(
    (employee1, employee2) => getSalary(employee2) - getSalary(employee1),
  );

  return itemsArray.map((item) => item);
}

function getEmployees(list) {
  sortList();

  return itemsArray.map((item) => item);
}

const newItems = getEmployees(listOfEmployees);

listOfEmployees.innerHTML = '';

newItems.forEach((item) => listOfEmployees.append(item));
