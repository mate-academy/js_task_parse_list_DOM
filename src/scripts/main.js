'use strict';

const call = document.querySelectorAll('li');
const resultList = [];

function sortList(list) {
  const sortBySalary = [...list].sort((a, b) =>
    Number(b.dataset.salary.replace(/[$,]/g, ''))
    - Number(a.dataset.salary.replace(/[$,]/g, ''))
  );

  document.querySelector('ul').append(...sortBySalary);
}

function getEmployees(list) {
  for (const index of list) {
    const result = {};

    result.name = index.innerText;
    result.position = index.dataset.position;
    result.salary = index.dataset.salary;
    result.age = index.dataset.age;
    resultList.push(result);
  }
}

sortList(call);
getEmployees(call);
