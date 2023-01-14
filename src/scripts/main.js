'use strict';

const listOfEmloyees = document.querySelector('ul');
const employeesItems = document.querySelectorAll('li');

function convertSalaryStringToNumber(string) {
  const result = string.split(',').join('').substring(1);

  return result;
}

function sortingBySalary(a, b) {
  return convertSalaryStringToNumber(b.dataset.salary)
- convertSalaryStringToNumber(a.dataset.salary);
}

function sortList(listItems, list) {
  const sorted = [...listItems].sort(sortingBySalary);

  for (const element of sorted) {
    list.append(element);
  }
}

function getEmployees(listItems) {
  const employeesArray = [...listItems].map(item => (
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  )
  );

  return employeesArray;
}

sortList(employeesItems, listOfEmloyees);
getEmployees(employeesItems);
