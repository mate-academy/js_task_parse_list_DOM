'use strict';

const employees = document.querySelectorAll('li');
const arrOfEmloyees = [...employees];

function sortBySalary() {
  arrOfEmloyees.sort(
    (employee1, employee2) =>
      +employee2.dataset.salary.replaceAll(/[$,]/g, '') -
      +employee1.dataset.salary.replaceAll(/[$,]/g, ''),
  );

  for (let i = 0; i < employees.length; i++) {
    employees[i].outerHTML = arrOfEmloyees[i].outerHTML;
  }
}

function createEmployee() {
  arrOfEmloyees.map((employee) => ({
    name: employee.innerHTML.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortBySalary();
createEmployee();
