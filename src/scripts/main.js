'use strict';

// write code here
const listField = document.querySelector('ul');
const listItems = listField.querySelectorAll('li');

function getEmployees(list) {
  return [...list].map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: Number(li.dataset.salary.replace(/[^0-9.-]+/g, '')),
      age: Number(li.dataset.age),
    };
  });
}

const employees = getEmployees(listItems);

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

const sortedEmployees = sortList(employees);

listField.innerHTML = '';

sortedEmployees.forEach((employee) => {
  const li = document.createElement('li');

  li.dataset.position = employee.position;
  li.dataset.salary = `$${employee.salary.toLocaleString('en-US')}`;
  li.dataset.age = employee.age;
  li.textContent = employee.name;

  listField.appendChild(li);
});
