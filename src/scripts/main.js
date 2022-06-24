'use strict';

function sortList(list) {
  return list.sort((a, b) =>
    parseInt(b.dataset.salary.split(',').join('').slice(1))
     - parseInt(a.dataset.salary.split(',').join('').slice(1)));
}

function getEmployees(list) {
  const employeeObj = {};
  const employeesArr = [];

  list.map(function(item) {
    employeeObj.name = item.innerText;
    employeeObj.position = item.dataset.position;

    employeeObj.salary
    = parseInt(item.dataset.salary.split(',').join('').slice(1));
    employeeObj.age = item.dataset.age;
    employeesArr.push({ ...employeeObj });
  });

  return employeesArr;
}

const listEmployees = [...document.querySelectorAll('li')];
const sortedList = sortList(listEmployees);
const sortedArrObj = getEmployees(sortedList);
const resultList = document.querySelectorAll('li');

for (let i = 0; i < sortedArrObj.length; i++) {
  resultList[i].innerText = sortedArrObj[i].name;
  resultList[i].dataset.salary = sortedArrObj[i].salary;
  resultList[i].dataset.age = sortedArrObj[i].age;
  resultList[i].dataset.position = sortedArrObj[i].position;
}
