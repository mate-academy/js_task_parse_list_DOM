'use strict';

// write code here
const ulItem = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

function sortList(list, listItems) {
  const itemsSorted = [...listItems].sort((a, b) => (
    +((b.dataset.salary)
      .slice(1)
      .split(',')
      .join(''))
    - +((a.dataset.salary)
      .slice(1)
      .split(',')
      .join(''))
  ));

  list.innerHTML = '';

  for (let i = 0; i < itemsSorted.length; i++) {
    list.appendChild(itemsSorted[i]);
  }
}

function getEmployees(listItems) {
  const result = [];

  for (const item of listItems) {
    const employer = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(employer);
  }

  return result;
}

sortList(ulItem, liItems);

getEmployees(liItems);
