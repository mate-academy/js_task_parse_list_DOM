'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const sortedEmployees = [...list.children].sort((employee1, employee2) => {
    return (
      salaryToNumber(employee2.dataset.salary) -
      salaryToNumber(employee1.dataset.salary)
    );
  });

  list.append(...sortedEmployees);
}

function getEmployees(list) {
  return [...list.children].map((employee) => {
    const { position, salary, age } = employee.dataset;

    return {
      name: employee.textContent,
      position,
      salary,
      age,
    };
  });
}

function salaryToNumber(salary) {
  return +salary.replace(/\$|,/g, '');
}

getEmployees(employeesList);
sortList(employeesList);
