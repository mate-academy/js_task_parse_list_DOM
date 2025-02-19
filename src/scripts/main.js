'use strict';

const listContainer = document.querySelector('ul');
const employees = document.querySelectorAll('[data-salary]');

function atributToNumber(element) {
  return element.getAttribute('data-salary').replace(/[$,]/g, '');
}

function sortList(list) {
  return [...list].sort(
    (item1, item2) => atributToNumber(item2) - atributToNumber(item1),
  );
}

function getEmployees(list) {
  const result = [];

  list.forEach((element) => {
    result.push({
      name: element.textContent.trim(),
      position: element.getAttribute('data-position'),
      salary: element.getAttribute('data-salary'),
      age: element.getAttribute('data-age'),
    });
  });

  return result;
}

const sortedEmployees = sortList(employees);

listContainer.innerHTML = '';

sortedEmployees.forEach((employee) => {
  listContainer.appendChild(employee);
});

getEmployees(employees);
