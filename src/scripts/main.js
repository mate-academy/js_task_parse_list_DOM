'use strict';
function getSalary(worker) {
  return Number
  (worker.dataset.salary.slice(1).split(',').join('')
  );
}

function sortList(list) {
const workers = [...list.querySelectorAll('li[data-salary]')];

workers.sort((a, b) => {
  return getSalary(b) - getSalary(a);
});

workers.forEach((worker) => {
  list.append(worker);
});
}

function getEmployees() {
  const workers = [...document.querySelectorAll('li[data-salary]')];

  return workers.map((worker) => {
    return {
      name: worker.textContent.trim(),
      position: worker.dataset.position,
      salary: getSalary(worker),
      age: Number(worker.dataset.age),
      };
  });
}

const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

console.log(employees);

// write code here
