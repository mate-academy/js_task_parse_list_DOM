'use strict';

function salaryToNumber(salary) {
  return +salary
    .split('')
    .filter((char) => '1234567890'.includes(char))
    .join('');
}

function sortList(list) {
  const sortEmployees = list;

  sortEmployees.sort(
    (emp1, emp2) => salaryToNumber(emp2.salary) - salaryToNumber(emp1.salary),
  );

  return sortEmployees;
}

function getEmployees(listElement) {
  const listOfEmployees = [];

  for (const element of listElement) {
    listOfEmployees.push({
      name: element.textContent,
      position: element.getAttribute('data-position'),
      salary: element.getAttribute('data-salary'),
      age: element.getAttribute('data-age'),
    });
  }

  return listOfEmployees;
}

const listOfElements = document.querySelectorAll('li');
const sortedEmployees = sortList(getEmployees(listOfElements));

for (let i = 0; i < listOfElements.length; i++) {
  listOfElements[i].innerHTML = sortedEmployees[i].name;
  listOfElements[i].setAttribute('data-position', sortedEmployees[i].position);
  listOfElements[i].setAttribute('data-salary', sortedEmployees[i].salary);
  listOfElements[i].setAttribute('data-age', sortedEmployees[i].age);
}
