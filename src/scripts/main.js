'use strict';

const employerItems = document.querySelectorAll('li');

const getEmployees = Array.from(employerItems).map((element) => {
  const employerName = element.textContent.trim();
  const position = element.dataset.position;
  const salary = element.dataset.salary;
  const age = element.dataset.age;

  const employerObj = {};

  employerObj.name = employerName;
  employerObj.position = position;
  employerObj.salary = Number(salary.replace('$', '').replace(/,/g, ''));
  employerObj.age = Number(age);

  return employerObj;
});

const sortedBySalary = getEmployees.sort((employer1, employer2) => {
  return employer2.salary - employer1.salary;
});

const list = document.querySelector('ul');

list.innerHTML = '';

sortedBySalary.forEach((employer) => {
  const li = document.createElement('li');

  li.textContent = `${employer.name}`;

  li.setAttribute('data-position', `${employer.position}`);
  li.setAttribute('data-salary', `${employer.salary}`);
  li.setAttribute('data-age', `${employer.age}`);

  list.appendChild(li);
});
