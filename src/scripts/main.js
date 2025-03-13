'use strict';

const list = document.querySelectorAll('li');

function sortList() {
  const employees = [];

  list.forEach((person) => {
    const salary = parseFloat(person.getAttribute('data-salary'));

    employees.push({
      name: person.innerText,
      position: person.getAttribute('data-position'),
      salary: salary,
      age: person.getAttribute('data-age'),
      element: person,
    });
  });

  employees.sort((a, b) => b.salary - a.salary);

  employees.forEach((human) => {
    document.querySelector('ul').appendChild(human.element);
  });
}

function getEmployees() {
  const employeesArray = [];

  list.forEach((person) => {
    employeesArray.push({
      name: person.innerText,
      position: person.getAttribute('data-position'),
      salary: parseFloat(person.getAttribute('data-salary')),
      age: person.getAttribute('data-age'),
    });
  });

  return employeesArray;
}

sortList();
getEmployees();
