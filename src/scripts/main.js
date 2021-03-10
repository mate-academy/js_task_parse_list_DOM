'use strict';

const listAllEmployees = document.querySelector('ul');
const listEveryEmployee = document.querySelectorAll('li');

function convertSalary(string) {
  return string.slice(1).split(',').join('');
}

function sortList(arr) {
  const sortedList
   = [...arr].sort((previous, current) => {
     return convertSalary(current.dataset.salary)
      - convertSalary(previous.dataset.salary);
   });

  listAllEmployees.append(...sortedList);

  return sortedList;
}

function getEmployees(arr) {
  return [...arr].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  })
  );
}

const sortedListOfEmployees = sortList(listEveryEmployee);

getEmployees(sortedListOfEmployees);
