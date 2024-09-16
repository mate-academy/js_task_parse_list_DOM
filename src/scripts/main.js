'use strict';

// write code here

function convertNumber(salary) {
  const salaryCopy = salary;

  const salaryNumber = salaryCopy.slice(1).split(',').join('');

  return +salaryNumber;
}

const listLi = document.querySelectorAll('li');

function getEmployees(laborArray) {
  const copy4 = [];

  for (let i = 0; i < laborArray.length; i++) {
    const copy3 = {};

    copy3.person = laborArray[i].innerText;
    copy3.salary = convertNumber(laborArray[i].dataset.salary);
    copy4.push(copy3);
  }

  return copy4;
}

function sortList(workerList) {
  const listDom = document.querySelectorAll('li');

  for (let i = 0; i < workerList.length; i++) {
    workerList.sort((a, b) => b.salary - a.salary);
    listDom[i].innerText = workerList[i].person;
  }
}

sortList(getEmployees(listLi));
