'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const salary = el => el.dataset.salary.slice(1).split(',').join('');

    return +salary(b) - +salary(a);
  });

  return employeesList.append(...list);
};

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerHTML,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
