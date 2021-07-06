'use strict';

const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

function sortBySalary(list) {
  list.sort(
    (a, b) =>
      +deleteSymbols(b.dataset.salary)
      - +deleteSymbols(a.dataset.salary)
  );
  employeesList.append(...list);
}

function getEmployees(list) {
  return list.map(person => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
};

sortBySalary(employees);
getEmployees(employees);

function deleteSymbols(string) {
  return string.replace(/[^\d]/g, '');
}
