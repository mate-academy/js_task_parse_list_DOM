'use strict';

const employeeList = document.querySelector('ul');
const employees = [ ...document.querySelectorAll('[data-salary]') ];

const sortList = function(list) {
  list.sort((a, b) => {
    const salary1 = Number(a.dataset.salary.replace(/[^0-9]/gi, ''));
    const salary2 = Number(b.dataset.salary.replace(/[^0-9]/gi, ''));

    return salary2 - salary1;
  });

  employeeList.append(...list);
};

const getEmployees = function(list) {
  return list.map(person => {
    return {
      name: person.innerHTML,
      ...person.dataset,
    };
  });
};

sortList(employees);
getEmployees(employees);
