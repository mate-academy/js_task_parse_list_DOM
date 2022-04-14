'use strict';

const list = document.querySelector('ul');
const listItems = [...list.querySelectorAll('li')];

const convertToNumber = number =>
  +(number.split('').filter(num => !isNaN(num)).join(''));

const sortList = listOfItems => {
  const sortedList = listOfItems.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  for (const person of sortedList) {
    list.append(person);
  }
};

const getEmployees = listOfEmployees => {
  const employees = [];

  for (const emloyee of listOfEmployees) {
    const objectFromEmployee = {
      name: emloyee.innerText,
      position: emloyee.dataset.position,
      salary: emloyee.dataset.salary,
      age: emloyee.dataset.age,
    };

    employees.push(objectFromEmployee);
  }

  return employees;
};

sortList(listItems);
getEmployees(listItems);
