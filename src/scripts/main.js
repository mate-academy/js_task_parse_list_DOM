'use strict';

// write code here
const list = document.querySelector('ul');

const arr = Array.from(list.children);

const getSalary = (el) => {
  const raw = el.dataset.salary;
  const clean = raw.replace(/[^\d.-]/g, '');

  return +clean;
};

const sortList = (arr1) => {
  const sort = arr1.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...sort);
};

const getEmployees = (arr2) => {
  const listOfEmployees = arr2.map((el) => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: getSalary(el),
    age: +el.dataset.age,
  }));

  return listOfEmployees;
};

sortList(arr);

const employees = getEmployees(arr);

console.log(employees);
