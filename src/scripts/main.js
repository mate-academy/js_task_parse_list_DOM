'use strict';

const listEmployees = [...document.querySelectorAll('li')];

function getEmployees(list) {
  const employees = [];

  list.forEach((elem) => {
    const employee = {
      name: elem.innerHTML.trim(),
      position: elem.getAttribute(['data-position']),
      salary: elem.getAttribute(['data-salary']),
      age: elem.getAttribute(['data-age']),
    };

    employees.push(employee);
  });

  return employees;
}

function sortList(list) {
  const listSort = list.sort(
    (a, b) =>
      convertSalary(b.getAttribute(['data-salary'])) -
      convertSalary(a.getAttribute(['data-salary'])),
  );

  for (const li of listSort) {
    document.querySelector('ul').append(li);
  }
}

function convertSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

getEmployees(listEmployees);
sortList(listEmployees);
