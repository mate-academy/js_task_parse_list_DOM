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

  const rootElement = document.querySelector('ul');

  for (let i = 0; i < sortedList.length; i++) {
    rootElement.append(sortedList[i]);
  }

  return rootElement;
}

sortList(listArr);

function getEmployees(employee) {
  const arrOfEmployees = employee.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return arrOfEmployees;
}

getEmployees(listArr);
