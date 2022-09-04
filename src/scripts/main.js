'use strict';

const allEmployees = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort((a, b) => {
    const salary1 = a.dataset.salary.replace(/[^0-9]/g, '');
    const salary2 = b.dataset.salary.replace(/[^0-9]/g, '');

    return salary2 - salary1;
  });
}

const sortedList = sortList(allEmployees);
const ul = document.querySelector('ul');

ul.innerHTML = sortedList.map(elem => {
  return elem.outerHTML;
}).join('');

function getEmployees(list) {
  const employeesArr = [];

  [...list].forEach(elem => {
    const objEmployee = {
      name: elem.innerText.trim(),
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };

    employeesArr.push(objEmployee);
  });

  return employeesArr;
}
getEmployees(allEmployees);
