'use strict';

const employeers = [...document.getElementsByTagName('li')];

function sortBySalary(list) {
  list.sort((a, b) => (+b.dataset.salary.slice(1).split(',').join(''))
    - (+a.dataset.salary.slice(1).split(',').join('')));

  list.map(li => li.parentElement.append(li));
}

function getInfo(list) {
  return list.map(empl => ({
    name: empl.innerText,
    position: empl.dataset.position,
    salary: empl.dataset.salary,
    age: empl.dataset.age,
  }));
}

sortBySalary(employeers);
getInfo(employeers);
