'use strict';

const ul = document.querySelector('ul');

function convertSalary(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(list) {
  const listCopy = [...list];
  const sortedList = listCopy.sort((a, b) => {
    const aSalary = convertSalary(a.dataset.salary);
    const bSalary = convertSalary(b.dataset.salary);

    return bSalary - aSalary;
  });

  ul.innerHTML = `
    ${sortedList.map(({ dataset, innerText }) => {
    return `
      <li
        data-position=${dataset.position}
        data-salary=${dataset.salary}
        data-age=${dataset.age}
      >
        ${innerText}
      </li>
      `;
  }).join('')}
  `;
};

function getEmployees(list) {
  const arr = [];
  const listCopy = [...list];

  for (const employee of listCopy) {
    const { position, salary, age } = employee.dataset;

    const obj = {
      name: employee.innerText,
      position,
      salary,
      age,
    };

    arr.push(obj);
  }

  return arr;
};

sortList(ul.children);
getEmployees(ul.children);
