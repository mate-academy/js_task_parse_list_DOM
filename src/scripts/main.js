'use strict';

const listOfEmployees = document.querySelector('ul');
const sortedEmployees = sortList(listOfEmployees);

sortedEmployees.forEach(employee => (
  listOfEmployees.append(employee)
));

getEmployees(listOfEmployees);

function sortList(list) {
  return [...list.children]
    .sort((firstEmployee, secondEmployee) => (
      convertSalaryToNumber(secondEmployee.dataset.salary)
      - convertSalaryToNumber(firstEmployee.dataset.salary)
    ));
}

function convertSalaryToNumber(salary) {
  return +salary.replace('$', '').replace(',', '');
}

function getEmployees(employeesList) {
  return [...employeesList.children].map(employee => ({
    name: employee.innerText,
    position: employee.dataset['position'],
    salary: employee.dataset['salary'],
    age: employee.dataset['age'],
  }));
}
