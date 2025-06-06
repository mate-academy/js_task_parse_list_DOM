'use strict';

const listElements = document.querySelectorAll('li');
const list = document.querySelector('ul');

function transformSalary(item) {
  const amountStr = item.getAttribute('data-salary');

  return parseFloat(amountStr.slice(1));
}

function sortList(listItems) {
  const itemsWithSalary = Array.from(listItems).map((item) => ({
    name: item.textContent,
    position: item.getAttribute('data-position'),
    salary: transformSalary(item),
    age: item.getAttribute('data-age'),
  }));

  return itemsWithSalary.sort((a, b) => b.salary - a.salary);
}

function getEmployees(listItems) {
  const sortedItems = sortList(listItems);

  list.innerHTML = '';

  sortedItems.forEach((item) => {
    const li = document.createElement('li');

    li.textContent = item.name;
    list.appendChild(li);
  });
}

getEmployees(listElements);
