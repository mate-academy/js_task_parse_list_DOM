'use strict';

function sortList() {
  const listUl = document.querySelectorAll('ul');
  const list = document.querySelectorAll('li');

  for (let i = 0; i < list.length; i++) {
    list[i].dataset.salary = +list[i].dataset.salary.slice(1)
      .split(',').join('');
  }

  const listSorted = [...list].sort((a, b) =>
    b.dataset.salary - a.dataset.salary);

  for (let i = 0; i < list.length; i++) {
    listUl[0].append(listSorted[i]);
  }
};

function getEmployees() {
  const employees = [];
  const employee = {};
  const list = document.querySelectorAll('li');

  for (const person of list) {
    employee.name = person.innerText;
    employee.position = person.dataset.position;
    employee.salary = person.dataset.salary;
    employee.age = person.dataset.age;

    employees.push({ ...employee });
  };

  return employees;
}

sortList();
getEmployees();
