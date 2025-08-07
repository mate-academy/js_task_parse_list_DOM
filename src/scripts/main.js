'use strict';

function sortList(list) {
  const employe = [...document.querySelectorAll('li')];
  const massive = [];

  for (let q = 0; q < employe.length; q++) {
    const a = sorting(employe[q].dataset.salary);

    massive.push([employe[q], a]);
  }

  massive.sort((a, b) => b[1] - a[1]);
  list.innerHTML = '';

  for (let i = 0; i < massive.length; i++) {
    list.appendChild(massive[i][0]);
  }
}

function sorting(element) {
  return parseInt(element.replace(/\$|,/g, ''));
}

function getEmployees(list) {
  const employers = [...list.querySelectorAll('li')];
  const employee = [];

  for (let q = 0; q < employers.length; q++) {
    employee.push({
      name: employers[q].innerText,
      position: employers[q].dataset.position,
      salary: sorting(employers[q].dataset.salary),
      age: parseInt(employers[q].dataset.age),
    });
  }

  return employee;
}

const list2 = document.querySelector('ul');

getEmployees(list2);
sortList(list2);
