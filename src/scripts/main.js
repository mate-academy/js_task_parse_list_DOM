'use strict';

// write code here
const allListEmployee = document.querySelectorAll('li');
const salaryEpmloyee = document.querySelectorAll('[data-salary]');

function sortList(listProperty) {
  let newList = '';

  for (let i = 0; i < listProperty.length; i++) {
    if ([i] < [i + 1]) {
      newList += [i];
      newList = +newList;
    }
  }
}

function getEmployees(listPropertyTwo) {
  const newArr = [];

  for (let i = 0; i < listPropertyTwo.length; i++) {
    const employee = {
      name: listPropertyTwo[i].textConstent.trim(),
      position: listPropertyTwo[i].getAttribute('data-position'),
      salary: listPropertyTwo[i].getAttribute('data-salary'),
      age: listPropertyTwo[i].getAttribute('data-age'),
    };

    newArr.push(employee);
  }

  return newArr;
}

sortList(salaryEpmloyee);
getEmployees(allListEmployee);
