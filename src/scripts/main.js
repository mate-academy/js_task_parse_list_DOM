'use strict';

const listElement = document.querySelector('ul');
const employees = Array.from(listElement.querySelectorAll('[data-salary]'));

const helper = (data) => Number(data.replace(/[$,]/g, ''));

const sortList = function (list) {
  list.sort((element1, element2) => {
    return (
      helper(element2.getAttribute('data-salary')) -
      helper(element1.getAttribute('data-salary'))
    );
  });

  listElement.append(...list);
};

const getEmployees = (list) => {
  return list.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: helper(employee.dataset.salary),
    age: Number(employee.dataset.age),
  }));
};

sortList(employees);
getEmployees(employees);
