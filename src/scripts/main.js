'use strict';

// write code here
const listOfEmployees = document.querySelector('ul');

function toNum(str) {
  return +str.split('$').join('').split(',').join('');
}

function sortList(list) {
  const newList = [...list.children].sort((a, b) => {
    return toNum(b.dataset.salary) - toNum(a.dataset.salary);
  });

  list.innerHTML = newList.map(el => `
    <li
    data-position="${el.dataset.position}"
    data-salary="${el.dataset.salary}"
    data-age="${el.dataset.age}"
    >
    ${el.innerHTML}
    </li>
  
  `).join('');
}

function getEmployees(list) {
  const newList = [...list.children].sort((a, b) => {
    return toNum(b.dataset.salary) - toNum(a.dataset.salary);
  });

  const result = [];

  for (const key of newList) {
    result.push(
      {
        name: key.innerText,
        position: key.dataset.position,
        salary: key.dataset.salary,
        age: key.dataset.age,
      }
    );
  }

  return result;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
