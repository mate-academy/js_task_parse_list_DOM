'use strict';

const employees = [];

const mylist = document.getElementsByTagName('li');

function getEmployees(list) {
  for (const el of list) {
    employees.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: Number(el.dataset.salary.replace(/[^0-9.-]+/g, '')),
      age: Number(el.dataset.age),
    });
  }
}

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

function renderResult() {
  getEmployees(mylist);

  const sortedEmployees = sortList(employees);

  const container = document.querySelector('ul');

  container.innerHTML = '';

  for (const emp of sortedEmployees) {
    const li = document.createElement('li');

    li.dataset.position = emp.position;
    li.dataset.salary = `$${emp.salary.toLocaleString()}`;
    li.dataset.age = emp.age;
    li.innerText = emp.name;
    container.appendChild(li);
  }
}

renderResult();
