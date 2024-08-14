'use strict';

const employeeList = document.querySelector('ul');

const employeeNodes = document.querySelectorAll('li');

const employees = [];

employeeNodes.forEach((node) => {
  const salary = node.getAttribute('data-salary').split(',').join('').slice(1);

  const newObj = {
    name: node.textContent.trim(),
    position: node.getAttribute('data-position'),
    salary: Number(salary),
    age: Number(node.getAttribute('data-age')),
  };

  employees.push(newObj);
});

function sortList(list) {
  list.sort((employee1, employee2) => {
    return employee2.salary - employee1.salary;
  });
}

function getEmployees(list) {
  employeeList.innerHTML = '';

  list.forEach((obj) => {
    const li = document.createElement('li');

    li.setAttribute('data-position', obj.position);
    li.setAttribute('data-salary', obj.salary);
    li.setAttribute('data-age', obj.age);
    li.textContent = obj.name;

    employeeList.appendChild(li);
  });
}

sortList(employees);
getEmployees(employees);
