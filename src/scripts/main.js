'use strict';

const items = document.querySelectorAll('li');
const arr = [...items];

function sortList(list) {
  function getNumber(item) {
    const result = +item.dataset.salary.split('').filter(el => el
      !== '$' && el !== ',').join('');

    return result;
  }

  list.sort((a, b) => {
    return getNumber(b) - getNumber(a);
  });

  const employeeList = document.querySelector('ul');

  employeeList.append(...arr);
}

function getEmployees(list) {
  const arrOfObj = list.map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return arrOfObj;
}

sortList(arr);
getEmployees(arr);
