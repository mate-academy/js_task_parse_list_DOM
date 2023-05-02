'use strict';

const li = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    return (Number(b.dataset.salary) - Number(a.dataset.salary));
  });

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const employees = list.map(el => {
    return {
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });

  return employees;
}

sortList(li);
getEmployees(li);
