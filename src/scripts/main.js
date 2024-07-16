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

listOfEmployees.innerHTML = '';

sortList().forEach((item) => listOfEmployees.append(item));
