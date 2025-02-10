'use strict';

const parseSalary = (salary) => parseFloat(salary.replace(/[^0-9.-]+/g, ''));

const employeeList = document.querySelectorAll('ul li');

const sortEmployees = () => {
  const sortedList = Array.from(employeeList).sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  sortedList.forEach((employee) => ul.appendChild(employee));
};

const getEmployees = () => {
  return Array.from(employeeList).map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.getAttribute('data-position'),
    salary: parseSalary(employee.getAttribute('data-salary')),
    age: parseInt(employee.getAttribute('data-age')),
  }));
};

sortEmployees();
getEmployees();
