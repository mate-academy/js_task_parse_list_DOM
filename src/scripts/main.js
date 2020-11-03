'use strict';

// write code here
const ulList = document.querySelector('ul');
const items = document.querySelectorAll('li');

function parseSalary(person) {
  return +person.dataset.salary.split(',').join('').split('$').join('');
}

const sortList = (list) => [...list]
  .sort((a, b) => parseSalary(b) - parseSalary(a));

ulList.append(...sortList(items));

const getEmployees = (list) => [...list]
  .map(employer => {
    const employerObj = {
      name: employer.innerText,
      position: employer.dataset.position,
      salary: employer.dataset.salary,
      age: employer.dataset.age,
    };

    return employerObj;
  });

// console.log(getEmployees(sortList(items)));
getEmployees(sortList(items));
