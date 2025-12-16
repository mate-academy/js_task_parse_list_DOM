'use strict';

const employees = document.querySelectorAll('li');
const employeesOfArray = [...employees];
const employeesList = document.querySelector('ul');

function replacer(str) {
  return str.replace(/[$,]/g, '');
}

function sortList(list) {
  const sortedList = [...list].sort(
    (a, b) => +replacer(b.dataset.salary) - +replacer(a.dataset.salary),
  );

  sortedList.forEach((li) => employeesList.append(li));

  return sortedList;
}

function getEmployees(list) {
  const arr = [];

  for (let i = 0; i < list.length; i++) {
    arr[i] = {
      name: list[i].textContent.trim(),
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    };
  }

  return arr;
}
getEmployees(sortList(employeesOfArray));
