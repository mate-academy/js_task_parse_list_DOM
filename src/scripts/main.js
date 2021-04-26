'use strict';

const list = document.querySelectorAll('li');

function getEmployees(data) {
  const employees = [...data]
    .map((elem) => ({
      name: elem.innerText,
      position: elem.dataset.position,
      salary: +elem.dataset.salary.replace(/[$,]/g, ''),
      age: +elem.dataset.age,
    }))
    .sort((a, b) => b.salary - a.salary);

  return employees;
}

getEmployees(list);
