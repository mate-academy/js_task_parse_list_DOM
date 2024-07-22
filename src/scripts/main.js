'use strict';

const employeeList = document.querySelector('ul');
let names = [];

document.querySelectorAll('li').forEach((el) => {
  const data = {
    name: el.textContent.trim(),
    age: el.dataset.age,
    salary: parseFloat(el.dataset.salary.replace(/[$,]/g, '')),
    position: el.dataset.position,
  };

  names.push(data);
});

function updateEmployeeList() {
  employeeList.innerHTML = '';

  names.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.dataset.position = employee.position;
    li.dataset.salary = `$${employee.salary.toLocaleString()}`;
    li.dataset.age = employee.age;
    employeeList.appendChild(li);
  });
}

function sortList() {
  names = names.sort((a, b) => b.salary - a.salary);
  updateEmployeeList();
}

sortList();

function getEmployees() {
  names = names.sort((a, b) => a.name.localeCompare(b.name));
  updateEmployeeList();
}

getEmployees();
