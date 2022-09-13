'use strict';

// write code here
const itemsLi = document.getElementsByTagName('li');
const list = [...itemsLi];

function sortList(arr) {
  const employees = [];

  for (const employee of arr) {
    employee.dataset.name = employee.innerText;
    employees.push(employee.dataset);
  }

  const sorted = employees.sort((a, b) =>
    Number(b.salary.replaceAll('$', '').replaceAll(',', ''))
    - Number(a.salary.replaceAll('$', '').replaceAll(',', '')));

  list.map(el => el.remove());

  const itemsUl = document.getElementsByTagName('ul');

  for (let i = 0; i < sorted.length; i++) {
    const item = document.createElement('li');

    item.innerText = employees[i].name;
    item.dataset.position = employees[i].position;
    item.dataset.salary = employees[i].salary;
    item.dataset.age = employees[i].age;

    [...itemsUl][0].appendChild(item);
  }
}

function getEmployees(arr) {
  const employees = [];

  for (const el of arr) {
    const obj = {};

    obj.name = el.innerText.trim();
    obj.salary = el.dataset.salary;
    obj.position = el.dataset.position;
    obj.age = el.dataset.age;

    employees.push(obj);
  }

  return employees;
}

sortList(list);
getEmployees(list);
