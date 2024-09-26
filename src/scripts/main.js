'use strict';

// write code here
const personList = [...document.querySelectorAll('li')];

function getNumber(item) {
  return (+item.slice(1).replace(',', ''));
}

function sortList(list) {
  const c = list.sort((a, b) => {
    return (getNumber(b.dataset.salary) - (getNumber(a.dataset.salary)));
  });

  return c;
}
sortList(personList);

document.querySelector('ul').append(...personList);

function getEmployees(list) {
  const arrObjectEmployee = list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return arrObjectEmployee;
}

getEmployees(personList);
