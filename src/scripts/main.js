'use strict';

const lists = [...document.getElementsByTagName('li')];

function sortList(li) {
  const sortedList = li.sort((prev, index) => (
    Number(index.dataset.salary.replace(/[^0-9.-]+/g, ''))
    - Number(prev.dataset.salary.replace(/[^0-9.-]+/g, ''))));

  return sortedList;
};

function getEmployees(li) {
  const employeesList = li.map((list) => (
    {
      name: list.innerText,
      position: list.dataset.position,
      salary: list.dataset.salary,
      age: list.dataset.age,
    }
  ));

  return employeesList;
}
sortList(lists);

const sorterdList = getEmployees(lists);

const ul = document.querySelector('ul');

ul.innerHTML = `
  ${sorterdList.map((list) => (`
  <li
    data-position=${list.position}
    data-salary=${list.salary}
    data-age=${list.age}
  >
    ${list.name}
  </li>`)).join('')}
`;
