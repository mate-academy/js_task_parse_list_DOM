'use strict';

const list = document.querySelectorAll('li');
const listArr = Array.from(list);

function sortList(arr) {
  const sortedList = arr.sort((a, b) => {
    const first = a.dataset.salary
      .slice(1)
      .split(',')
      .join('');

    const second = b.dataset.salary
      .slice(1)
      .split(',')
      .join('');

    const result = +second - +first;

    return result;
  });

  return sortedList;
}

const newList = sortList(listArr);

const rootElement = document.querySelector('ul');

for (let i = 0; i < newList.length; i++) {
  rootElement.append(newList[i]);
}

sortList(listArr);

function getEmployees(employee) {
  const arrOfEmpoyees = [];
  const obj = {};

  for (const item of employee) {
    obj.name = item.innerText;
    obj.position = item.dataset.position;
    obj.salary = item.dataset.salary;
    obj.age = item.dataset.age;

    const result = { ...obj };

    arrOfEmpoyees.push(result);
  }

  return arrOfEmpoyees;
}

getEmployees(listArr);
