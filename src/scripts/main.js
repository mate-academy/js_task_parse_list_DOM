'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getEmployees(list) {
  const copy = [...list];

  return copy.map((employee) => ({
    name: employee.textContent.replaceAll('\n', '').trim(),
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary').slice(1),
    age: employee.getAttribute('data-age'),
  }));
}

function CreateSortList(list) {
  const copy = [...list];

  const arr = copy.map((employee) => ({
    name: employee.textContent.replaceAll('\n', '').trim(),
    salary: Number(
      employee.getAttribute('data-salary').slice(1).replaceAll(',', ''),
    ),
  }));

  arr.sort((a, b) => b.salary - a.salary);

  document.querySelector('ul').textContent = '';

  for (const li of arr) {
    const newElement = document.createElement('li');

    newElement.textContent = li.name;

    document.querySelector('ul').appendChild(newElement);
  }
}

getEmployees(listOfEmployees);
CreateSortList(listOfEmployees);
