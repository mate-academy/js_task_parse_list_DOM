'use strict';

// write code here

function sortList(workers) {
  workers.sort((el1, el2) => {
    return getNumber(el2.dataset.salary) - getNumber(el1.dataset.salary);
  });

  const list = document.querySelector('ul');

  workers.forEach((worker) => list.appendChild(worker));

  return workers;
}

function getNumber(salary) {
  return parseFloat(salary.substring(1));
}

function getEmployees(list) {
  return list.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

const employees = Array.from(document.querySelectorAll('ul li'));

sortList(employees);

getEmployees(employees);
