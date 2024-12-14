'use strict';

const employeeListItems = document.querySelectorAll('ul > li');

const employees = Array.from(employeeListItems).map((item) => {
  return {
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: Number(item.getAttribute('data-salary').replace(/[$,]/g, '')),
    age: item.getAttribute('data-age'),
  };
});

const sortList = function (list) {
  list.sort((a, b) => b.salary - a.salary);
};

const getEmployees = function (list) {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', `$${employee.salary.toLocaleString()}`);
    li.setAttribute('data-age', employee.age);
    ul.appendChild(li);
  });
};

sortList(employees);
getEmployees(employees);
