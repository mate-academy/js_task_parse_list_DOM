'use strict';

const data = document.querySelectorAll('li');
const arr = [...data];

function getEmployees(list) {

  const employees = [];

  for (let i of list) {
    const person  = {
      name: i.innerText,
      age: i.dataset.age,
      position: i.dataset.position,
      salary: i.dataset.salary,
    }

    employees.push(person);
  }

  return employees;
}

function sortList(list) {
  const people = getEmployees(list);
  const sortedEmployees = people.sort((a, b) => {
    return +a.salary.slice(1).replace(/,/g, '')
      > +b.salary.slice(1).replace(/,/g, '') ? -1 : 1;
  });

  return sortedEmployees;
}

const sortedList = sortList(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i].innerText = sortedList[i].name;
  arr[i].dataset.age = sortedList[i].age;
  arr[i].dataset.position = sortedList[i].position;
  arr[i].dataset.salary = sortedList[i].salary;
}
