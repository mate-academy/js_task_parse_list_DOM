'use strict';

const people = document.getElementsByTagName('li');
const ul = document.querySelector('ul');

function sortList(list) {
  function helper(str) {
    return +(str.replace(/\D/g, ''));
  };

  const sorted = [...list]
    .sort((a, b) => {
      return helper(b.dataset.salary)
      - helper(a.dataset.salary);
    })
    .forEach(li => ul.append(li));

  return sorted;
}

function getEmployees(list) {
  const employees = [];

  for (const li of [...list]) {
    const obj = {};

    obj.name = li.textContent.trim();
    obj.position = li.dataset.position;
    obj.salary = li.dataset.salary;
    obj.age = li.dataset.age;

    employees.push(obj);
  }

  return employees;
}

getEmployees(sortList(people));
