'use strict';

const listWrapper = document.querySelector('ul');
const listElements = Array.from(document.querySelectorAll('li'));

function sortList(list) {
  list.sort((firstElement, secondElement) => {
    const firstElementSalary = convertToNumber(firstElement.dataset.salary);
    const secondElementSalary = convertToNumber(secondElement.dataset.salary);

    return secondElementSalary - firstElementSalary;
  });

  listWrapper.append(...list);
}

function getEmployees(list) {
  const employees = [];

  list.forEach((element) => {
    employees.push({
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: convertToNumber(element.dataset.salary),
      age: Number(element.dataset.age),
    });
  });

  return employees;
}

function convertToNumber(string) {
  const number = string.replace(/[$,]/g, '');

  return +number || 0;
}

sortList(listElements);
getEmployees(listElements);
