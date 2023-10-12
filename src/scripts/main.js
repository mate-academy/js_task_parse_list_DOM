'use strict';

function salaryToNumber(salary) {
  return +salary.slice(1).split(',').join('');
}

const listUl = document.querySelector('ul');

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];
  const objList = [];

  for (let i = 0; i < items.length; i++) {
    objList[i] = {
      name: items[i].textContent,
      position: items[i].dataset.position,
      salary: items[i].dataset.salary,
      age: items[i].dataset.age,
    };
  }

  return objList;
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];
  const listSort = getEmployees(list).sort((a, b) => {
    return salaryToNumber(b.salary) - salaryToNumber(a.salary);
  });

  for (let i = 0; i < items.length; i++) {
    items[i].dataset.position = listSort[i].position;
    items[i].dataset.salary = listSort[i].salary;
    items[i].dataset.age = listSort[i].age;
    items[i].textContent = listSort[i].name;
  }
};

sortList(listUl);
getEmployees(listUl);
