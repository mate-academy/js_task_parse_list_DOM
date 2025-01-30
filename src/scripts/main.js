'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];

sortList(listOfEmployees);

const arr = listOfEmployees.map((item) => item.textContent.trim());

function sortList(list) {
  list.sort((a, b) => {
    const first = a.dataset.salary.slice(1).split(',').join('');
    const second = b.dataset.salary.slice(1).split(',').join('');

    if (+first === +second) {
      return 1;
    }

    return +first < +second ? 1 : -1;
  });
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    employees.push({
      name: arr[i],
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    });
  }

  return employees;
}

for (let i = 0; i < listOfEmployees.length; i++) {
  document.querySelectorAll('li')[i].textContent =
    getEmployees(listOfEmployees)[i].name;
}
