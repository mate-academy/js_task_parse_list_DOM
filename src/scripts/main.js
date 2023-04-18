'use strict';

const formatSalaryToNumber = (salaryText) => (
  Number(salaryText.slice(1).split(',').join('')));

const formatSalaryToText = (salaryNumber) => (
  `$${salaryNumber.toLocaleString('en-US')}`
);

const employeesElement = document.querySelectorAll('li');
const employees = getEmployeesList();

function getEmployeesList() {
  const list = [];

  employeesElement.forEach(employeeElement => {
    const employeeProperties = employeeElement.dataset;
    const employeeName = employeeElement.innerText;

    const { position, salary, age } = employeeProperties;

    list.push({
      employeeName,
      position,
      salary: formatSalaryToNumber(salary),
      age,
    });
  });

  return list;
}

function sortEmployeesList() {
  // descending order
  employees.sort((firstEmployee, secondEmployee) => (
    secondEmployee.salary - firstEmployee.salary));
}

function setEmployeesElement() {
  employeesElement.forEach((employeeElement, employeeIndex) => {
    const { position, salary, age, employeeName } = employees[employeeIndex];

    employeeElement.dataset.age = age;

    employeeElement.dataset.salary = formatSalaryToText(salary);

    employeeElement.dataset.position = position;
    employeeElement.innerText = employeeName;
  });
}

sortEmployeesList();
setEmployeesElement();
