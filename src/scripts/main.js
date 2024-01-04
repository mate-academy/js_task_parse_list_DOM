'use strict';

const mainList = document.querySelector('ul');

const sortList = (list) => {
  [...list.querySelectorAll('li')]
    .sort((a, b) => b.dataset.salary.slice(1).replace(',', '')
    - a.dataset.salary.slice(1).replace(',', ''))
    .forEach(li => list.appendChild(li));
};

const getEmployees = (list) => {
  [...list.querySelectorAll('li')]
    .map(li => ({
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    }));
};

sortList(mainList);
getEmployees(mainList);
