'use strict';

const listEmployees = [...document.querySelectorAll('li')];

function getEmployees(list) {
  const employees = [];

  list.forEach((elem) => {
    const employee = {
      name: elem.innerHTML.trim(),
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

function sortList(list) {
  const listSort = list.sort(
    (a, b) => convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
  );

  for (const li of listSort) {
    document.querySelector('ul').append(li);
  }
}

function convertSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

sortList(listEmployees);
getEmployees(listEmployees);
