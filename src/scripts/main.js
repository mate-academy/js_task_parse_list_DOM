'use strict';

const parents = document.querySelector('ul');
const listArr = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    return (
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
    );
  });

  parents.innerHTML = '';

  sortedList.forEach((item) => {
    parents.appendChild(item);
  });

  return sortedList;
}

function getEmployees(list) {
  const employees = [];

  for (const item of list) {
    employees.push({
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    });
  }

  return employees;
}

sortList(listArr);
getEmployees(listArr);

function convertToNumber(str) {
  const clearStr = str.replaceAll(',', '').slice(1);

  return Number(clearStr);
}
