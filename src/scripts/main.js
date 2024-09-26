'use strict';

function sortList() {
  const employeeList = document.querySelector('ul');
  const employees = Array.from(employeeList.children).map((li) => {
    return {
      name: li.textContent,
      position: li.dataset.position,
      salary: parseFloat(li.dataset.salary.replace(/[$,]/g, '')),
      age: parseInt(li.dataset.age, 10),
    };
  });

  employees.sort((a, b) => b.salary - a.salary);

  employeeList.innerHTML = '';

  employees.forEach((employee) => {
    const li = document.createElement('li');

    li.dataset.position = employee.position;
    li.dataset.salary = `$${employee.salary.toLocaleString()}`;
    li.dataset.age = employee.age;
    li.textContent = employee.name;
    employeeList.appendChild(li);
  });
}

function getArrayOfEmployees() {
  return document.querySelector('ul');
}

sortList();
getArrayOfEmployees();
