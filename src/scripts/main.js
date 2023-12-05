'use strict';

const element = document.querySelectorAll('li');
const element1 = document.querySelector('ul');

const convertNumberSort = (item) => {
  let str = '';

  for (let i = 0; i < item.length; i++) {
    str += item[i].replace(/[^0-9, ]/g, ' ').replace(',', '');
  }

  const arr = str.split(' ').join(' ').substring(1).split(' ');
  const numbSalary = [];

  for (let i = 0; i < arr.length; i++) {
    numbSalary.push(+arr[i]);
  }

  return numbSalary;
};

const list = [...element].map(item => {
  return {
    name: `${item.innerText}`,
    salary: `${convertNumberSort(item.dataset.salary)}`,
  };
});

const sortList = () => {
  list.sort((a, b) => b.salary - a.salary);
};

const getEmployees = (el) => {
  element1.innerHTML = `
  <ul>
    ${`${el.map(item => `
      <li>
        ${item.name}
      </li>
    `).join('')}`}
  </ul>`;
};

sortList();
getEmployees(list);
