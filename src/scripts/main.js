'use strict';

const employeesContainer = document.querySelector('ul');
const employees = [...document.querySelectorAll('[data-salary]')];
const employeesList = employees.map((employee) => {
  return {
    name: employee.innerText,
    position: employee.dataset.position,
    salary: +employee.dataset.salary.replace(/[$, ]/g, ''),
    age: +employee.dataset.age,
  };
});

const sortEmployees = [...employeesList].sort((a, b) => b.salary - a.salary);
const onStartOrderedList = () => {
  employeesContainer.innerHTML = '';

  sortEmployees.forEach((el) => {
    const empEl = document.createElement('li');

    empEl.innerText = el.name;
    empEl.dataset.position = el.position;
    empEl.dataset.salary = `$${el.salary}`;
    empEl.dataset.age = el.age;

    employeesContainer.appendChild(empEl);
  });
};

onStartOrderedList();
