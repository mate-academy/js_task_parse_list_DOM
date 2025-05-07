'use strict';

// write code here
const employees = document.querySelectorAll('li');

function salaryToNumber(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList(list) {
  return [...list].sort((person1, person2) => {
    const salary1 = salaryToNumber(person1.dataset.salary);
    const salary2 = salaryToNumber(person2.dataset.salary);

    return salary2 - salary1;
  });
}

function getEmployees(list) {
  const employeesObj = [];

  for (const person of list) {
    employeesObj.push({
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employeesObj;
}

const sortedEmployees = getEmployees(sortList(employees));

for (let i = 0; i < employees.length; i++) {
  employees[i].textContent = sortedEmployees[i].name;
  employees[i].dataset.position = sortedEmployees[i].position;
  employees[i].dataset.age = sortedEmployees[i].age;
  employees[i].dataset.salary = sortedEmployees[i].salary;
}
