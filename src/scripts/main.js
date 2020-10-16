'use strict';

const listBlock = document.querySelector('ul');
const listOfPeople = document.querySelectorAll('li');
const listArray = Array.from(listOfPeople);

const personSalary = (el) => (
  (el.dataset.salary)
    .slice(1)
    .split(',')
    .join('')
);

const sortList = (list) => {
  list.sort((a, b) => personSalary(b) - personSalary(a));

  return listBlock.append(...list);
};

const getEmployees = (list) => {
  const employeesList = [];

  list.forEach(person => (
    employeesList.push({
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    })
  ));

  return employeesList;
};

sortList(listArray);
getEmployees(listArray);
