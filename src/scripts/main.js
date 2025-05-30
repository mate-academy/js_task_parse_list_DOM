'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => {
    const aSalary = parseSalary(a.dataset.salary);
    const bSalary = parseSalary(b.dataset.salary);

    return bSalary - aSalary;
  });

  list.forEach((element) => {
    document.querySelector('ul').appendChild(element);
  });

  return list;
}

function getEmployees(list) {
  return list.map((element) => {
    return {
      name: element.dataset.name,
      position: element.dataset.position,
      salary: parseSalary(element.dataset.salary),
      age: +element.dataset.age,
    };
  });
}

function parseSalary(salary) {
  return +salary.replaceAll(',', '').replaceAll('$', '');
}

const sorted = sortList(employees);

getEmployees(sorted);
