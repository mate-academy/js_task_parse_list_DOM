'use strict';

const employeeList = [...document.querySelectorAll('li')];
const htmlUl = document.querySelector('ul');

function helperFunc(employeeSalaryStr) {
  return +(employeeSalaryStr.replace(/\D/g, ''));
};

function sortList(listArr) {
  const sorted = listArr
    .sort((a, b) => {
      return helperFunc(b.dataset.salary)
      - helperFunc(a.dataset.salary);
    });

  [...sorted].forEach(li => htmlUl.append(li));

  return sorted;
}

function getEmployees(list) {
  const employees = [];

  for (const li of list) {
    const employee = {};

    employee.name = li.textContent.trim();
    employee.position = li.dataset.position;
    employee.salary = li.dataset.salary;
    employee.age = li.dataset.age;

    employees.push(employee);
  }

  return employees;
}

getEmployees(sortList(employeeList));
