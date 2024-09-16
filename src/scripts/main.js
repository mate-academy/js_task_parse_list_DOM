'use strict';

function sortEmployees(list) {
  return [...list]
    .map(item => Object.assign({}, item.dataset, { name: item.innerText }))
    .sort((prev, curr) => {
      return getSalary(curr.salary) - getSalary(prev.salary);
    });
}

function setEmployees(elementsList, sortedList) {
  for (let i = 0; i <= elementsList.length - 1; i++) {
    elementsList[i].innerText = sortedList[i].name;
    elementsList[i].dataset.position = sortedList[i].position;
    elementsList[i].dataset.salary = sortedList[i].salary;
    elementsList[i].dataset.age = sortedList[i].age;
  }
}

function getSalary(str) {
  return Number(str.slice(1).split(',').join(''));
}

const htmlElementsList = document.querySelectorAll('li');
const sortedElementsList = sortEmployees(htmlElementsList);

setEmployees(htmlElementsList, sortedElementsList);
