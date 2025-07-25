'use strict';

// Get an array of employees
// Sort list by salary in descending order

// The schema for the employee:

// {
//   name,
//   position,
//   salary,
//   age
// }

const list = document.querySelector('ul');
const getSalary = (x) =>
  Number(x.getAttribute('data-salary').split(',').join('').slice(1));

function getEmployees(x) {
  let employees = [...x.children];

  employees = employees.map((a) => {
    return {
      name: a.innerText,
      position: a.getAttribute('data-position'),
      salary: a.getAttribute('data-salary'),
      age: a.getAttribute('data-age'),
    };
  });

  return employees;
}

function sortList(x) {
  const employeeList = [...x.children];

  employeeList.sort((a, b) => getSalary(b) - getSalary(a));
  list.replaceChildren(...employeeList);
}

getEmployees(list);
sortList(list);
