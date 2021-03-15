'use strict';

const ulEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function convertSalary(string) {
  return string.slice(1).split(',').join('');
}

function sortList(workers) {
  const sortedList = [...workers]
    .sort((a, b) => (
      convertSalary(b.dataset.salary)
        - convertSalary(a.dataset.salary)
    ));

  ulEmployees.append(...sortedList);

  return sortedList;
}

function getEmployees(workers) {
  return [...workers].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  })
  );
}

const sortedListOfEmployees = sortList(employees);

getEmployees(sortedListOfEmployees);
