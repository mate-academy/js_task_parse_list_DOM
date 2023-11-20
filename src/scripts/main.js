/* eslint-disable max-len */
'use strict';

function giveClearNumber(strNumber) {
  return strNumber.slice(1).split(',').join('');
};

function sortList(employeesList) {
  const sortedList = employeesList.sort((employee1, employee2) => {
    const employee1Salary = giveClearNumber(employee1.getAttribute('data-salary'));
    const employee2Salary = giveClearNumber(employee2.getAttribute('data-salary'));

    return employee2Salary - employee1Salary;
  });

  const sortedHTML = sortedList.map(employee => `
    <li
      data-position={employee.getAttribute('data-position')}
      data-salary={employee.getAttribute('data-salary')}
      data-age={employee.getAttribute('data-age')}
    >
    ${employee.textContent}
    </li>
  `).join('');

  document.querySelector('ul').innerHTML = sortedHTML;
};

function getEmployees(employeesList) {
  const employeesParamsList = [];

  employeesList.forEach(employee => {
    const employeeParams = {
      name: employee.textContent,
      position: employee.getAttribute('data-position'),
      salary: employee.getAttribute('data-salary'),
      age: employee.getAttribute('data-age'),
    };

    employeesParamsList.push(employeeParams);
  });

  return employeesParamsList;
}

const employees = Array.from(document.querySelectorAll('li'));

sortList(employees);
getEmployees(employees);
