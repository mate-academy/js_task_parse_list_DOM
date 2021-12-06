'use strict';

// write code here
const list = document.querySelectorAll('li');
const main = document.querySelector('ul');

function sortList(listOfNodes) {
  const sortEmployees = [...listOfNodes].sort((a, b) => {
    return +b.dataset.salary.replace(/[^0-9]/g, '')
    - +a.dataset.salary.replace(/[^0-9]/g, '');
  });

  main.append(...sortEmployees);
}

function getEmployees(listOfNodes) {
  return [...listOfNodes].map((li) => {
    return {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.age,
    };
  });
}
sortList(list);
getEmployees(list);
