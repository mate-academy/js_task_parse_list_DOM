'use strict';

const list = document.body.querySelectorAll('li');

function sortList(items) {
  const sorted = Array.from(list).sort((a, b) => {
    return (
      parseInt(b.dataset.salary.replace(/[,$]/g, '')) -
      parseInt(a.dataset.salary.replace(/[,$]/g, ''))
    );
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  sorted.forEach((item) => {
    ul.appendChild(item);
  });
}

sortList(list);

function getEmployees(employees) {
  const employee = [];

  for (const person of employees) {
    const obj = {};

    obj.name = person.textContent.trim();
    obj.position = person.getAttribute('data-position');

    obj.salary = parseInt(
      person.getAttribute('data-salary').replace(/[,$]/g, ''),
      10,
    );
    obj.age = parseInt(person.getAttribute('data-age'));

    employee.push(obj);
  }

  return employee;
}

getEmployees(list);
