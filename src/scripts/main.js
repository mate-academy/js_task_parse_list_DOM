'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];

function convertSalary(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList(list) {
  const sortedList = list.sort(
    (a, b) => convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
  );

  for (let i = 0; i < sortedList.length; i++) {
    document.querySelector('ul').append(sortedList[i]);
  }
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
