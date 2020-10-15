'use strict';

const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

function sortBySalary(list) {
  list.sort(
    (a, b) =>
      +b.dataset.salary.replace(/[^\d]/g, '')
      - +a.dataset.salary.replace(/[^\d]/g, '')
  );
  employeesList.append(...list);
}

function getEmployees(list) {
  /* eslint-disable */
  return list.map(person => {
    person = {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  /* eslint-enable */

    return person;
  });
};

sortBySalary(employees);
getEmployees(employees);
