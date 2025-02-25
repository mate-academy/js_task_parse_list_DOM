'use strict';

const employees = [...document.querySelectorAll('li')];
const employeeContainer = document.querySelector('ul');

const employeesList = [];

function getEmployees() {
  for (const employee of employees) {
    const person = {
      name: employee.innerText,
      position: employee.getAttribute('data-position'),
      salary: employee.getAttribute('data-salary'),
      age: employee.getAttribute('data-age'),
    };

    employeesList.push(person);
  }
}

function sortList() {
  const sortedPeople = employeesList
    .map((person) => ({
      ...person,
      salary: Number(person.salary.replace(/[$,]/g, '')),
    }))
    .sort((a, b) => b.salary - a.salary);

  employeeContainer.innerHTML = '';

  sortedPeople.forEach((employee) => {
    const li = document.createElement('li');

    li.innerText = employee.name;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    employeeContainer.append(li);
  });

  return sortedPeople;
}

getEmployees();
sortList();
