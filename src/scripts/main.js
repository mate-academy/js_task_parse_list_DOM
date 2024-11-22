'use strict';

const listOfEmployees = [...document.querySelectorAll(`ul li`)];

function convertToNumber(item) {
  return Number(item.dataset.salary.replace('$', '').replace(/,/g, ''));
}

function sortList(list) {
  const parentElement = list[0].parentNode;
  const descendingOrder = list.sort((i1, i2) => {
    const item1 = convertToNumber(i1);
    const item2 = convertToNumber(i2);

    if (item1 < item2) {
      return 1;
    }

    if (item1 > item2) {
      return -1;
    }

    return 0;
  });

  descendingOrder.forEach((item) => parentElement.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertToNumber(item),
    age: Number(item.dataset.age),
  }));
}

sortList(listOfEmployees);

getEmployees(listOfEmployees);
