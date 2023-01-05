'use strict';

const list = document.querySelector('ul');

const sortList = (listOfValue) => {
  let sort = [...listOfValue].sort((a, b) =>
    b.dataset.salary.split(',').join('').slice(1)
    - a.dataset.salary.split(',').join('').slice(1));

  sort = sort.forEach(item => list.append(item));

  return sort;
};

function getEmployees(listOfValue) {
  const result = [...listOfValue].map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return result;
}

sortList(list.children);
getEmployees(list.children);
