'use strict';

const eachEmployee = document.querySelectorAll('li');
const allEmployees = document.querySelector('ul');

const salaryToNumber = (salary) => {
  return +salary.slice(1).replace(/,/g, '');
};

const sortList = (list) => {
  const copiedList = [...list];

  const sortedList = copiedList
    .sort((a, b) => salaryToNumber(b.dataset.salary)
    - salaryToNumber(a.dataset.salary));

  allEmployees.append(...sortedList);
};

const getEmployees = (list) => {
  return list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(eachEmployee);
getEmployees(eachEmployee);
