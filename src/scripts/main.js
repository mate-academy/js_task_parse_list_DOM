'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  const sortedList = [...list.children];

  function getSalary(item) {
    const number = +item.dataset.salary.slice(1).split(',').join('');

    return number;
  }

  sortedList.sort((a, b) => getSalary(b) - getSalary(a));

  for (let i = 0; i < sortedList.length; i++) {
    list.append(sortedList[i]);
  }
}

function getEmployees(list) {
  const employees = [];

  for (const person of list.children) {
    const employe = {};

    employe.name = person.innerText;
    employe.position = person.dataset.position;
    employe.salary = person.dataset.salary;
    employe.age = person.dataset.age;
    employees.push(employe);
  }

  return employees;
}

sortList(employeesList);
getEmployees(employeesList);
