'use strict';

function turnStrToNum(str) {
  const num = parseInt(str.replace(/[$,]/g, ''), 10);

  return num;
}

function prepareStr(str) {
  return str.replace(/\s+/g, ' ').trim();
}

function sortList(list) {
  const listItems = [...list.querySelectorAll('li')];

  listItems.sort((a, b) => {
    const salaryA = turnStrToNum(a.dataset.salary);
    const salaryB = turnStrToNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  listItems.forEach((listItem) => list.appendChild(listItem));
}

function getEmployees(list) {
  const employeeArr = [];

  const employees = list.map((li) => ({
    name: prepareStr(li.textContent),
    position: li.dataset.position,
    salary: turnStrToNum(li.dataset.salary),
    age: parseInt(li.dataset.age, 10),
  }));

  employeeArr.push(employees);

  return employeeArr;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeeListItems = document.querySelectorAll('ul li');

// eslint-disable-next-line no-unused-vars
const employeesOrdered = getEmployees([...employeeListItems]);
