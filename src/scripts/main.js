'use strict';

// write code here

const ul = document.querySelector('ul');
const rawWorkers = document.querySelectorAll('li');

const employers = getEmployees(rawWorkers);

const sortArray = sortList(employers);

showSortedList(sortArray);

function parseSalary(salary) {
  return Number(salary.replace(/[\\$,]/g, ''));
}

function getEmployees(workers) {
  const employees = Array.from(workers).map((employee) => {
    const worker = employee.textContent.trim();
    const position = employee.dataset.position;
    const salary = employee.dataset.salary;
    const age = employee.dataset.age;

    return {
      worker,
      position,
      salary: parseSalary(salary),
      age: Number(age, 10),
    };
  });

  return employees;
}

function sortList(listEmployers) {
  const sortArr = listEmployers.sort((a, b) => b.salary - a.salary);

  return sortArr;
}

function showSortedList(sortedList) {
  ul.innerHTML = '';

  sortedList.forEach((element) => {
    const listItem = document.createElement('li');

    listItem.innerText = element.worker;
    ul.appendChild(listItem);
  });
}
