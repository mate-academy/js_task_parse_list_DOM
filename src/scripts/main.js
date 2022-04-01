'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

const sortList = (list) => {
  const sortedList = [...list].sort((a, b) =>
    b.dataset.salary.replace(',', '').slice(1)
   - a.dataset.salary.replace(',', '').slice(1));

  listOfEmployees.append(...sortedList);
};

const getEmployees = (list) => {
  [...list].map(person => ({
    name: person.textContent,
    ...person.dataset,
  }));
};

sortList(employees);
getEmployees(employees);
