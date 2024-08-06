'use strict';

const employeesElements = document.querySelectorAll('li');

const employeesObj = [];

employeesElements.forEach((element) => {
  const obj = {
    name: element.textContent.trim(),
    position: element.getAttribute('data-position'),
    salary: parseFloat(
      element.getAttribute('data-salary').replace(/[$,]/g, ''),
    ),
    age: element.getAttribute('data-age'),
  };

  employeesObj.push(obj);
});

const employeesSorted = employeesObj.sort((a, b) => b.salary - a.salary);

const ul = document.querySelector('ul');

ul.innerHTML = '';

employeesSorted.forEach((employee) => {
  const li = document.createElement('li');

  li.textContent = employee.name;
  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', '$' + employee.salary.toLocaleString('en-US'));
  li.setAttribute('data-age', employee.age);

  ul.appendChild(li);
});
