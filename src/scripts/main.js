'use strict';

const li = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    return parseFloat(b.dataset.salary.slice(1))
    - parseFloat(a.dataset.salary.slice(1));
  });

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const employees = list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return employees;
}

sortList(li);
getEmployees(li);
