'use strict';

const listEmployees = [...document.querySelectorAll('li')];

const toNum = (el) => +el.match(/\d+/g).join('');

const sortList = (list) => {
  list.sort((a, b) => {
    return toNum(b.dataset.salary)
      - toNum(a.dataset.salary);
  });

  document.querySelector('ul').append(...list);
};

const getEmployees = (list) => {
  const newEmployees = [];

  for (let i = 0; i < list.length; i++) {
    const employee = {};

    employee.name = list[i].innerText;
    employee.position = list[i].dataset.position;
    employee.salary = list[i].dataset.salary;
    employee.age = list[i].dataset.age;

    newEmployees.push(employee);
  }

  return newEmployees;
};

sortList(listEmployees);
getEmployees(listEmployees);
