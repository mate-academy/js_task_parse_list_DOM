'use strict';

const ulList = document.querySelector('ul');
const liItems = [...document.querySelectorAll('li')];

function sortList(list) {
  const normalizeSalary = salary =>
    parseInt(salary.slice(1).split(',').join(''));

  const sorted = list.sort((a, b) =>
    normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary));

  ulList.append(...sorted);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(liItems);
getEmployees(liItems);
