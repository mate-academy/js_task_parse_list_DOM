'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((empl1, empl2) =>
      toNumber(empl2.dataset.salary) - toNumber(empl1.dataset.salary)
    )
    .forEach(employee => list.append(employee));

  return list;
}

function toNumber(salary) {
  return +salary.replace(/[^0-9]/gi, '');
}

function getEmployees(list) {
  return [...list.children].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  })
  );
}

sortList(employees);
getEmployees(employees);
