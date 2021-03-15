'use strict';

const listWithEmployees = document.querySelector('ul');
const listWithEveryEmployee = document.querySelectorAll('li');

function convertSalary(string) {
  return string.slice(1).split(',').join('');
}

function sortList(employees) {
  const sortedList = [...employees]
    .sort((a, b) => (
       convertSalary(a.dataset.salary)
        - convertSalary(b.dataset.salary);
     ));

  listWithEmployees.append(...sortedList);

  return sortedList;
}

function getEmployees(employees) {
  return [...employees].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  })
  );
}

const sortedListOfEmployees = sortList(listWithEveryEmployee);

getEmployees(sortedListOfEmployees);
