'use strict';

const employeeList = document.querySelector('ul');
const employees = Array.from(employeeList.children);

const sortEmloyeeList = () => {
  employees.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    return salaryB - salaryA;
  });

  employees.forEach((employee) => employeeList.appendChild(employee));
};

const getEmployeeArray = () => {
  return employees.map((employee) => ({
    name: employee.textContent,
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
  }));
};

sortEmloyeeList();
getEmployeeArray();
