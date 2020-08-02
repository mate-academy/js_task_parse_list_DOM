'use strict';

const listLi = document.querySelectorAll('li');

function sortList(list) {
  const sortSalary = [...list].sort((a, b) =>
    b.dataset.salary.replace('$', '').replace(',', '.')
 - a.dataset.salary.replace('$', '').replace(',', '.'));

  document.querySelector('ul').append(...sortSalary);
};
sortList(listLi);

function getEmployees(list) {
  for (let i = 0; i < list.length; i++) {
    const resultObject = {};
    const resultArray = [];

    resultObject.name = list[i].innerText;
    resultObject.position = list[i].dataset.position;
    resultObject.salary = list[i].dataset.salary;
    resultObject.age = list[i].dataset.age;
    resultArray.push(resultObject);
  };
};
getEmployees(listLi);
