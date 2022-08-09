'use strict';

// write code here
const ul = document.querySelector('ul');

function sortList(list) {
  const listEmployees = list.children; // get HTMLCollection
  const arrSortSalary = [...listEmployees].sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  arrSortSalary.forEach((item) => list.appendChild(item));

  return arrSortSalary;
};

function getEmployees(list) {
  const listEmployees = list.children;
  const arrEmployees = [...listEmployees].map(item => {
    const resEmployee = {};

    resEmployee.name = item.innerText;
    resEmployee.position = item.dataset.position;
    resEmployee.salary = item.dataset.salary;
    resEmployee.age = item.dataset.age;

    return resEmployee;
  });

  return arrEmployees;
};

sortList(ul);
getEmployees(ul);
