'use strict';

// write code here
const ulItem = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

function salaryToNum(str) {
  return Number((str.dataset.salary)
    .slice(1)
    .split(',')
    .join(''));
}

function sortList(list, listItems) {
  const itemsSorted = [...listItems].sort((prev, curr) => {
    const previous = salaryToNum(prev);
    const current = salaryToNum(curr);

    return current - previous;
  });

  list.innerHTML = '';

  itemsSorted.forEach(item => (
    list.appendChild(item)
  ));
}

function getEmployees(listItems) {
  const employees = [...listItems].map(item => (
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  ));

  return employees;
}

sortList(ulItem, liItems);

getEmployees(liItems);
