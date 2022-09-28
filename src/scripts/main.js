'use strict';

const items = document.querySelectorAll('li');
const arr = [...items];

function sortList(list) {
  list.sort((a, b) => {
    a.dataset.salary = +a.dataset.salary.split('').filter(el => el
      !== '$' && el !== ',').join('');

    b.dataset.salary = +b.dataset.salary.split('').filter(el => el
      !== '$' && el !== ',').join('');

    return b.dataset.salary - a.dataset.salary;
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
