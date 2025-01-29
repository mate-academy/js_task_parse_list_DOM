'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

const sortList = () => {
  employees.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/\$|,/g, ''),
    );
    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/\$|,/g, ''),
    );

    return salaryB - salaryA;
  });
};

sortList(employees);

employeesList.innerHTML = '';

employees.forEach((employee) => employeesList.appendChild(employee));

const getEmployees = () => {
  return employees.map((employee) => ({
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
    name: employee.textContent.replace(/\s/g, ''),
  }));
};

getEmployees(employees);
