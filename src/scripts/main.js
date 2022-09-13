'use strict';

const fullList = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort((a, b) => {
    const salaryA = +(a.dataset.salary.slice(1).split('')
      .filter(item => item !== ',').join(''));
    const salaryB = +(b.dataset.salary.slice(1).split('')
      .filter(item => item !== ',').join(''));

    return salaryB - salaryA;
  });
}

const sortedList = sortList(fullList);

document.querySelector('ul').innerHTML = sortedList.map(item => {
  return item.outerHTML;
}).join('');

function getEmployees(list) {
  const employees = [];

  [...list].map(element => {
    const employee = {
      name: element.innerText.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

getEmployees(fullList);
