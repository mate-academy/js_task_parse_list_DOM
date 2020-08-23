'use strict';

const items = document.querySelectorAll('li');
const employees = [...items];

function sortList(list) {
  function convertToNumber(employeeSalary) {
    return +employeeSalary
      .split('')
      .filter(item => item !== '$' && item !== ',')
      .join('');
  }

  list.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  document.querySelector('ul').append(...list);
}

function getEmployees(list) {
  return list.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
