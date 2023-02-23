'use strict';

const listOfLi = document.querySelectorAll('li');

function sortList(list) {
  const employees = [...list];

  return employees.sort((personA, personB) => {
    const a = +personA.dataset.salary.slice(1).replace(',', '');
    const b = +personB.dataset.salary.slice(1).replace(',', '');

    return b - a;
  });
}

const newList = sortList(listOfLi);

function getEmployees(list) {
  const employees = [...list];

  return employees.map(employee => {
    const employeeName = employee.innerText;
    const position = employee.getAttribute('data-position');
    const salary = employee.getAttribute('data-salary');
    const age = employee.getAttribute('data-age');

    return {
      employeeName,
      position,
      salary,
      age,
    };
  });
}

getEmployees(newList);
