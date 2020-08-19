'use strict';

const employees = [...document.querySelectorAll('[data-salary]')];
const employeeList = document.querySelector('ul');

const sortList = function(list) {
  list.sort((a, b) => {
    const salary1 = Number(a.dataset.salary.slice(1).replace(/,/g, ''));
    const salary2 = Number(b.dataset.salary.slice(1).replace(/,/g, ''));

    return salary2 - salary1;
  });

  employeeList.append(...list);
};

const getEmployees = function(list) {
  return list.map(employee => {
    return Object.assign({}, {
      name: employee.innerHTML,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });
};

sortList(employees);
getEmployees(employees);
