'use strict';

const list = document.querySelector('ul');
const employeesList = Array.from(list.querySelectorAll('li'));

const reg = new RegExp(/\D/g);

const salary = employeesList.map((element) => ({
  element,
  salary: Number(element.dataset.salary.replace(reg, '')),
}));

const sortList = (item) => item.sort((a, b) => b.salary - a.salary);

const getEmployees = sortList(salary);

list.innerHTML = '';

getEmployees.forEach(({ element }) => list.appendChild(element));
