'use strict';

const listElements = document.querySelectorAll('ul li');
const listArray = Array.from(listElements);

function formatStringToNumber(string) {
  return +string.replace(/[^0-9.-]+/g, '');
}

function sortList(list) {
  let sortedList = [...list];

  sortedList.sort((a, b) => {
    const firstElement = formatStringToNumber(a.dataset.salary);
    const secondElement = formatStringToNumber(b.dataset.salary);

    return secondElement - firstElement;
  });

  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  sortedList.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(listArray);
console.log(getEmployees(listArray));
