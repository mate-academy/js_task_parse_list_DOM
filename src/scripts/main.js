'use strict';

const employeeList = document.querySelector('ul');

const parseSalary = (salaryStr) => {
  let cleanStr = salaryStr.split('$')[1];

  cleanStr = cleanStr.split(',').join('');

  return parseFloat(cleanStr);
};

const sortEmployees = (list) => {
  const employeeArray = Array.from(list.children);

  const sortedEmployees = employeeArray.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortedEmployees.forEach((employee) => list.appendChild(employee));
};

const getEmployeeData = (list) => {
  const employeeArray = Array.from(list.children);

  return employeeArray.map((employee) => {
    // Перейменували item на employee
    return {
      name: employee.textContent.trim(),
      position: employee.getAttribute('data-position'),
      salary: parseSalary(employee.getAttribute('data-salary')),
      age: parseInt(employee.getAttribute('data-age')),
    };
  });
};

sortEmployees(employeeList);
getEmployeeData(employeeList);
