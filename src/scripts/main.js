'use strict';

const parentElement = document.querySelector('ul');
const list = document.querySelectorAll('li');

function transformSalaryToNumber(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(data) {
  const arrayList = Array.from(data);

  arrayList
    .sort((a, b) => {
      return -(
        transformSalaryToNumber(a.dataset.salary) -
        transformSalaryToNumber(b.dataset.salary)
      );
    })
    .map((item) => {
      parentElement.appendChild(item);
    });
}

function getEmployees(data) {
  return Array.from(data).map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
