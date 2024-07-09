'use strict';

// write code here
function getNumber(string) {
  return +string.getAttribute('data-salary').slice(1).replaceAll(',', '');
}

function getSortedEmployeesBySalary(listEmployees) {
  return listEmployees.sort(
    (item1, item2) => getNumber(item2) - getNumber(item1),
  );
}

function getEmployees(listEmployees) {
  const employees = [];

  listEmployees.forEach((employee) => {
    const newEmployee = {
      name: employee.innerText,
      position: employee.getAttribute('data-position'),
      salary: employee.getAttribute('data-salary'),
      age: +employee.getAttribute('data-age'),
    };

    employees.push(newEmployee);
  });

  return employees;
}

const elements = [...document.querySelectorAll('[data-salary]')];

const sortedElements = getSortedEmployeesBySalary(elements);

const ul = elements[0].parentNode;

sortedElements.forEach((element) => ul.appendChild(element));

// eslint-disable-next-line no-console
console.dir(getEmployees(elements));
