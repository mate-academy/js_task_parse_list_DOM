
'use strict';

// write code here

function sortList() {
  const ul = document.querySelector('ul');

  const list = [...ul.querySelectorAll('li')];

  const newList = list.sort((el1, el2) => {
    const salaryA = getData(el1.dataset.salary);
    const salaryB = getData(el2.dataset.salary);

    return salaryB - salaryA;
  });

  newList.forEach((item) => {
    ul.appendChild(item);
  });
}

function getEmployees() {
  const list = [...document.querySelectorAll('li')];
  const employees = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };

    employees.push(employee);
  });

  return employees;
}

function getData(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

sortList();
getEmployees();


