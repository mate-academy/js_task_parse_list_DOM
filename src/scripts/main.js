'use strict';

const employees = [...document.querySelectorAll('li')];
const sortedEmployeesBySalary = sortEmployeesBySalary(employees);
const objectsOfSortedEmployeesBySalary = createArrayOfEmployeesObjects(sortedEmployeesBySalary);
console.log(objectsOfSortedEmployeesBySalary);

function sortEmployeesBySalary(employees) {
  return employees.sort((a, b) => {
    const aSalary = parseSalary(a.dataset.salary);
    const bSalary = parseSalary(b.dataset.salary);

    return bSalary - aSalary;
  });
}

function parseSalary(salary) {
    return +salary.replace('$', '').replace(',', '');
}

function createArrayOfEmployeesObjects(employees) {
  const arrayOfEmployees = [];

  for (const employee of employees) {
    const employeeData = {
      name: employee.innerText,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
      position: employee.dataset.position,
    }

    arrayOfEmployees.push(employeeData)
  }

  return arrayOfEmployees;
}
