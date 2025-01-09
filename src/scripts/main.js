/* eslint-disable no-console */

'use strict';

// write code here
const people = document.querySelectorAll('li');

const employeesArray = Array.from(people)
  .map(CreatNewObjects)
  .sort((a, b) => b.salary - a.salary);

document.querySelector('ul').innerHTML = '';

employeesArray.forEach((employee) => {
  const li = document.createElement('li');

  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', employee.salary);
  li.setAttribute('data-age', employee.age);
  li.textContent = employee.name;

  document.querySelector('ul').appendChild(li);
});

function CreatNewObjects(person) {
  const newPerson = {
    name: person.textContent,
    position: person.getAttribute('data-position'),
    salary: person.getAttribute('data-salary'),
    age: person.getAttribute('data-age'),
  };

  newPerson.salary = newPerson.salary.replace(/[($)|(,)]/g, '');
  newPerson.salary = Number(newPerson.salary);

  return newPerson;
}
