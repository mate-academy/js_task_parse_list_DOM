'use strict';

const employees = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort((person1, person2) => {
    const salary1 = convertSalaryToNumber(person1.dataset.salary);
    const salary2 = convertSalaryToNumber(person2.dataset.salary);

    return salary2 - salary1;
  });
}

function convertSalaryToNumber(salary) {
  return +salary.replace('$', '').replace(',', '');
}

function getEmployees(list) {
  const employeesObjects = [];

  for (const person of list) {
    employeesObjects.push({
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employeesObjects;
}

const sortedEmployees = getEmployees(sortList(employees));

for (let i = 0; i < employees.length; i++) {
  employees[i].textContent = sortedEmployees[i].name;
  employees[i].dataset.position = sortedEmployees[i].position;
  employees[i].dataset.age = sortedEmployees[i].age;
  employees[i].dataset.salary = sortedEmployees[i].salary;
}
