'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortEmployees(arr) {
  const salary = (item) => +item.slice(1).split(',').join('');

  const sorted = arr.sort((a, b) => {
    return salary(b.dataset.salary) - salary(a.dataset.salary);
  });

  list.append(...sorted);
};

function getEmployees(arr) {
  return arr.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortEmployees(employees);
getEmployees(employees);
