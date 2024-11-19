'use strict';

const people = document.querySelectorAll('li');
const peopleArray = [...people];

function sortList(workers) {
  workers.sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary);
    const salaryB = parseFloat(b.dataset.salary);

    return salaryB - salaryA;
  });
}

function getEmployees(workers) {
  const list = [];

  for (const worker of workers) {
    const employee = {};

    employee.name = worker.innerText;
    employee.position = worker.dataset.position;
    employee.age = parseFloat(worker.dataset.age);
    employee.salary = parseFloat(worker.dataset.salary);

    list.push(employee);
  }

  return list;
}

sortList(peopleArray);

const listContainer = document.querySelector('ul');

listContainer.innerHTML = '';

peopleArray.forEach((person) => {
  listContainer.appendChild(person);
});

getEmployees(peopleArray);
