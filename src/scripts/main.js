'use strict';

function getEmployees(list) {
  const result = [];

  for (const employee of list) {
    result.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: +employee.dataset.salary.replace(/\$|,/g, ''),
      age: employee.dataset.age,
    });
  }

  return result;
}

function sortEmployees(employeesArray) {
  employeesArray.sort((a, b) => b.salary - a.salary);
}

function setEmployees(list, sorted) {
  for (let i = 0; i < list.length; ++i) {
    list[i].innerText = sorted[i].name;
    list[i].dataset.position = sorted[i].position;
    list[i].dataset.salary = `$${sorted[i].salary.toLocaleString('en-US')}`;
    list[i].dataset.age = sorted[i].age;
  }
}

const employeesList = document.querySelectorAll('li');
const employees = getEmployees(employeesList);

sortEmployees(employees);

setEmployees(employeesList, employees);
