'use strict';

const listEmployee = [];

for (const li of document.querySelectorAll('[data-salary]')) {
  listEmployee.push({
    element: li,
    employeeName: li.innerHTML.trim(),
    position: li.dataset.position,
    salary: parseFloat(li.getAttribute('data-salary').replace(/[$,]/g, '')),
    age: li.dataset.age,
  });
}

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

function getEmployees(list) {
  return list.map(({ employeeName, position, salary, age }) => ({
    name: employeeName,
    position,
    salary,
    age,
  }));
}

const employeeList = document.querySelector('ul');

employeeList.innerHTML = '';

sortList(listEmployee).forEach((emp) => employeeList.appendChild(emp.element));

getEmployees(listEmployee);
