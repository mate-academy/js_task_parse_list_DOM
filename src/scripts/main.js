'use strict';

const list = document.querySelectorAll('li');

const ul = document.querySelector('ul');

function convertToNumber(text) {
  return +(text.replace('$', '').replace(',', ''));
}

const sortList = (input) => {
  return [...input].sort((item1, item2) => {
    return convertToNumber(item1.dataset.salary)
      < convertToNumber(item2.dataset.salary) ? 1 : -1;
  });
};

const sortedList = sortList(list);

ul.innerHTML = `
  ${sortedList.map(item => `
    <li
      data-position={item.dataset.position}
      data-salary={item.dataset.salary}
      data-age={item.dataset.age}
    >
      ${item.innerText}
    </li>
  `).join('')}
`;

const getEmployees = (input) => {
  return [...input].map(item => (
    {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }
  ));
};

getEmployees(list);
