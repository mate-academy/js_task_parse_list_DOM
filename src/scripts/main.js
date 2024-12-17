'use strict';

const arrList = document.querySelectorAll('li');
const arrDate = [];

function sortList(list) {
  for (let i = 0; i < arrList.length; i++) {
    arrDate.push({
      name: arrList[i].textContent,
      position: arrList[i].dataset.position,
      salary: arrList[i].dataset.salary,
      age: arrList[i].dataset.age,
    });
  }

  return arrDate;
}

function getEmployees(list) {
  arrDate.sort(
    (el1, el2) =>
      +el2.salary.slice(1).split(',').join('') -
      +el1.salary.slice(1).split(',').join(''),
  );

  for (let i = 0; i < arrDate.length; i++) {
    arrList[i].textContent = arrDate[i].name;
    arrList[i].dataset.position = arrDate[i].position;
    arrList[i].dataset.salary = arrDate[i].salary;
    arrList[i].dataset.age = arrDate[i].age;
  }

  return arrList;
}

sortList(arrList);

getEmployees(arrDate);
