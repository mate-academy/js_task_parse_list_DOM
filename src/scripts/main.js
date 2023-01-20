'use strict';

// write code here
const employeeList = document.querySelectorAll('li');

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort(
    (a, b) => convertSalaryToNumber(b.salary) - convertSalaryToNumber(a.salary)
  );

  for (let i = 0; i < employees.length; i++) {
    list[i].dataset.position = employees[i].position;
    list[i].dataset.salary = employees[i].salary;
    list[i].dataset.age = employees[i].age;
    list[i].textContent = employees[i].name;
  }
}

function convertSalaryToNumber(salary) {
  return parseInt(salary.slice(1).replace(/,/g, ''));
}

function getEmployees(list) {
  return [...list].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employeeList);
