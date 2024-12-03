'use strict';

const empoyeeslist = document.querySelector('ul');

function sortList(list) {
  function moneyToNumber(string) {
    const filtredString = string.replace(/\$/g, '').replace(/,/g, '');

    return filtredString;
  }

  const listArray = [...list.querySelectorAll('li')];
  const compareFunction = (a, b) =>
    moneyToNumber(b.dataset.salary) - moneyToNumber(a.dataset.salary);
  const sortedList = [...listArray].sort(compareFunction);

  list.innerHTML = '';

  for (const elem of sortedList) {
    list.append(elem);
  }
}

function getEmployees(list) {
  const result = [];
  const listArray = [...list.querySelectorAll('li')];

  for (const elem of listArray) {
    result.push({
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    });
  }

  return result;
}

sortList(empoyeeslist);
getEmployees(empoyeeslist);
