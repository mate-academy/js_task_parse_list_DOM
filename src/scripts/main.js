'use strict';

const employeeList = [...document.querySelectorAll('li')];

function getEmployees(employeesArray) {
  return employeesArray.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: Number(employee.dataset.salary.replace(/\$|,/g, '')),
      age: employee.dataset.age,
    };
  });
};

function sortList(employeesArray) {
  employeesArray.sort((a, b) => b.salary - a.salary);
}

const employees = getEmployees(employeeList);

sortList(employees);

employees.forEach((employee, i) => {
  employeeList[i].innerText = employee.name;
  employeeList[i].dataset.position = employee.position;

  employeeList[i].dataset.salary
    = `$${employee.salary.toLocaleString('en-US')}`;
  employeeList[i].dataset.age = employee.age;
});
