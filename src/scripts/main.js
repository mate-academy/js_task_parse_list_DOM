'use strict';

const list = document.querySelector('ul');
const listItems = [...list.querySelectorAll('li')];

const sortList = listOfItems => {
  listOfItems.forEach(item => {
    const numFromSalary = +(item.dataset.salary.split('$').pop()
      .split(',').join('.'));

    item.dataset.salary = numFromSalary;
  });

  const sortedList = listOfItems.sort((a, b) =>
    b.dataset.salary - a.dataset.salary);

  sortedList.forEach(element => {
    const number = +element.dataset.salary;
    const convertToCorrectFormat = number.toFixed(3).split('');

    convertToCorrectFormat.unshift('$');

    const convertedFormat = convertToCorrectFormat.join('')
      .split('.').join(',');

    element.dataset.salary = convertedFormat;
  });

  for (const person of sortedList) {
    list.append(person);
  }
};

const employees = [];

const getEmployees = listOfEmployees => {
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
