'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((employee1, employee2) => {
    return (
      getSalary(employee2.dataset.salary) - getSalary(employee1.dataset.salary)
    );
  });

  for (const employee of list) {
    ul.append(employee);
  }
}

sortList(employees);

function getEmployees(workers) {
  return workers.map((worker) => {
    return {
      name: worker.textContent,
      position: worker.dataset.position,
      salary: getSalary(worker.dataset.salary),
      age: Number(worker.dataset.age),
    };
  });
}

getEmployees(employees);

function getSalary(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}
