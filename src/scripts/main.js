'use strict';

const fullList = document.querySelectorAll('li');

function createNumber(string) {
  return +(string.slice(1).replace(',', '.'));
}

function sortList(list) {
  return [...list].sort((a, b) => {
    const salaryA = createNumber(a.dataset.salary);
    const salaryB = createNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
}

const sortedList = sortList(fullList);

document.querySelector('ul').innerHTML = sortedList.map(item =>
  item.outerHTML).join('');

function getEmployees(list) {
  return [...list].map(element => {
    const employee = {
      name: element.innerText.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };

    return employee;
  });
}

getEmployees(fullList);
