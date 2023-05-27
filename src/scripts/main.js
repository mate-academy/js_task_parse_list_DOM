'use strict';

const list = document.querySelector('ul');

function sortList(listItems) {
  const sortedList = [...listItems].sort((a, b) => {
    const numA = toNumber(a);
    const numB = toNumber(b);

    return numB - numA;
  });

  // Remove all child elements from `list`
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Append the sorted elements to `list`
  sortedList.forEach((item) => {
    list.appendChild(item);
  });

  return list;
}

function toNumber(listItem) {
  return listItem.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(listItems) {
  return [...listItems].map((item, index) => ({
    name: item.innerText,
    position: index,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list.children);
getEmployees(list.children);
