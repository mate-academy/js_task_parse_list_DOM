'use strict';

const listEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li'); // nodelist
const employeesList = [ ...employees ]; // array

function salary(person) {
  return +(person.dataset.salary).slice(1).replace(',', '');
}

function sortList(list) { // list is array of li
  const sortEmloyees = list.sort((a, b) => salary(b) - salary(a));

  listEmployees.append(...sortEmloyees);
}

function getEmployees(list) {
  list.map(el => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.append.age,
  })
  );
}

sortList(employeesList);
getEmployees(employeesList);
