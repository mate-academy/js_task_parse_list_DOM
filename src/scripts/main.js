'use strict';

function sortList(list) {
  const sortedList = [...list].sort((a, b) =>
    Number(b.dataset.salary.replace(/[$,]/g, ''))
  - Number(a.dataset.salary.replace(/[$,]/g, ''))
  );

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const resultList = [];

  for (let i = 0; i < list.length; i++) {
    const listItem = {};

    listItem['name'] = list[i].innerText;
    listItem['position'] = list[i].dataset.position;
    listItem['salary'] = list[i].dataset.salary;
    listItem['age'] = list[i].dataset.age;
    resultList.push(listItem);
  }

  return resultList;
}

sortList(document.querySelectorAll('li'));
getEmployees(document.querySelectorAll('li'));
