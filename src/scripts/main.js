'use strict';

const ul = document.querySelector('ul');
const list = Array.from(document.querySelectorAll('li'));

function convetString(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

function sortList() {
  const sortEmployees = list.sort((a, b) => {
    return convetString(b.dataset.salary) - convetString(a.dataset.salary);
  });

  ul.innerHTML = '';

  sortEmployees.forEach((item) => ul.appendChild(item));
}
sortList();

function getEmployees() {
  const emplObjects = list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return emplObjects;
}

getEmployees();
