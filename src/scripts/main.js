'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function convertToNum(string) {
  const sliced = string.slice(1);
  const converted = parseFloat(sliced);

  return parseFloat(converted);
}

function sortList(arr) {
  const arrayFromNodeList = Array.from(arr);

  arrayFromNodeList.sort((a, b) => {
    const valueA = convertToNum(a.dataset.salary);
    const valueB = convertToNum(b.dataset.salary);

    return valueB - valueA;
  });

  return arrayFromNodeList;
}

function getEmployees(arr) {
  const employees = [];

  arr.forEach(item => {
    employees.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return employees;
}

const newList = sortList(items);

list.innerHTML = `
  <ul>
    ${newList.map(item => `
      <li
        data-position=${item.dataset.position}
        data-salary=${item.dataset.salary}
        data-age=${item.dataset.age}
      >
        ${item.innerText}
      </li>
    `).join('')}
  </ul>
`;

getEmployees(items);
sortList(items);
