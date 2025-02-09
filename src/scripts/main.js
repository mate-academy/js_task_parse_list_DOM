'use strict';

const list = [...document.querySelectorAll('li')];

const employees = list.map((employee) => {
  const removeDollar = employee.dataset.salary
    .replaceAll('$', '')
    .replaceAll(',', '');
  const convertoNumber = Number(removeDollar);

  return {
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: convertoNumber,
    age: employee.dataset.age,
  };
});

employees.sort((a, b) => b.salary - a.salary);

employees.forEach((obj) => {
  obj.salary = `$${obj.salary.toLocaleString()}`;
});

const sortedEmployeesSalary = employees.map((employee) => {
  const liEl = document.createElement('li');

  liEl.textContent = employee.name;
  liEl.dataset.position = employee.position;
  liEl.dataset.salary = employee.salary;
  liEl.dataset.age = employee.age;

  return liEl;
});

const ulCurrent = document.querySelector('ul');
const ulNew = document.createElement('ul');

ulNew.append(...sortedEmployeesSalary);

ulCurrent.replaceWith(ulNew);
