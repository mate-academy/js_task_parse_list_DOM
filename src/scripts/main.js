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
  const newEmployees = list.map(person => {
    const employee = {};

    employee.name = person.innerText;
    employee.position = person.dataset.position;
    employee.salary = person.dataset.salary;
    employee.age = person.dataset.age;

    return employee;
  });

  return newEmployees;
};

sortList(listEmployees);
getEmployees(listEmployees);
