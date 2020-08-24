'use strict';

const employees = document.querySelectorAll('li');

function convertInNum(string) {
  return Number(string.replace(/[$,]/g, ''));
}

function sortList(list) {
  const sortingSalary = [...list].sort((a, b) =>
    convertInNum(b.dataset.salary) - convertInNum(a.dataset.salary)
  );

  document.querySelector('ul').append(...sortingSalary);
}

function getEmployees(list) {
  const resultList = [];

  for (const prop of list) {
    const resultObj = {};

    resultObj.name = prop.innerText;
    resultObj.position = prop.dataset.position;
    resultObj.salary = prop.dataset.salary;
    resultObj.age = prop.dataset.age;

    resultList.push(resultObj);
  }

  return resultList;
}

sortList(employees);
getEmployees(employees);
