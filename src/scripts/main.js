'use strict';

const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

function getPrepearedSalary(salaryData) {
  return Number(salaryData.replace(',', '').replace('$', ''));
}

function sortBySalary(arrayOfLi, ulParent) {
  const sortedArr = arrayOfLi.sort(
    (a, b) =>
      getPrepearedSalary(b.dataset.salary) -
      getPrepearedSalary(a.dataset.salary),
  );

  ulParent.innerHTML = '';

  for (const liItem of sortedArr) {
    ulParent.append(liItem);
  }
}

function getEmployees(list) {
  const arrEmployees = [];
  let employee = {};
  let employeeName = '';
  let position = '';
  let salary = '';
  let age = '';

  for (const item of list) {
    employeeName = item.innerHTML.trim();
    position = item.dataset.position;
    salary = item.dataset.salary;
    age = item.dataset.age;

    employee = {
      employeeName,
      position,
      salary,
      age,
    };

    arrEmployees.push(employee);
  }

  return arrEmployees;
}

sortBySalary(li, ul);
getEmployees(li);
