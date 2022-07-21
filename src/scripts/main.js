'use strict';

const employesList = [...document.querySelectorAll('li')];

const getFormatString = (stringToFormat) => {
  return stringToFormat
    .split('$')
    .join('')
    .split(',')
    .join('');
};

const sortList = (list) => list.sort((a, b) => {
  return Number(getFormatString(b.salary)) - Number(getFormatString(a.salary));
});

function getEmployees(list) {
  return list.map(item => {
    const employeeData = {};

    employeeData['name'] = item.innerText;
    employeeData['position'] = item.dataset.position;
    employeeData['salary'] = item.dataset.salary;
    employeeData['age'] = item.dataset.age;

    return employeeData;
  });
}

const employees = getEmployees(employesList);
const sortedEmployees = sortList(employees);

sortedEmployees.forEach((employee, index) => {
  employesList[index].innerText = employee.name;
  employesList[index].dataset.position = employee.position;

  employesList[index].dataset.salary = (
    `$${employee.salary.toLocaleString('en-US')}`
  );
  employesList[index].dataset.age = employee.age;
});
