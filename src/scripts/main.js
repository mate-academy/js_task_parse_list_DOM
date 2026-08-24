'use strict';

const employees = document.querySelectorAll('ul li');
const employeesArray = [...employees];

function sortList(list) {
  const sortedEmployees = list.sort(
    (employee1, employee2) => getSalary(employee2) - getSalary(employee1),
  );

  return sortedEmployees;
}

function getSalary(employee) {
  const employeeSalary = employee.dataset.salary
    .replace('$', '')
    .replace(',', '');

  return +employeeSalary;
}

function getEmployees(list) {
  return list.map((employee) => {
    const employeeName = employee.textContent.trim();
    const position = employee.dataset.position;
    const salary = getSalary(employee);
    const age = +employee.dataset.age;

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
}

sortList(employeesArray).forEach((employee) => {
  employee.parentNode.appendChild(employee);
});

getEmployees(employeesArray);
