'use strict';

const employees = [ ...document.querySelectorAll('li') ];

function strToNumber(string) {
  return string.replace(/,|\$/g, '');
}

function sortList(list) {
  list.sort((a, b) => (
    strToNumber(b.dataset.salary) - strToNumber(a.dataset.salary)
  ));
  list.forEach(item => item.parentNode.appendChild(item));
}

function getEmployees(list) {
  const newStructureOfEmployees = [];

  for (const person of list) {
    newStructureOfEmployees.push({
      name: person.textContent.trim(),
      ...person.dataset,
    });
  }

  return newStructureOfEmployees;
}

sortList(employees);
getEmployees(employees);
