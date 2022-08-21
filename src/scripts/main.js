'use strict';

// write code here
const item = document.querySelector('ul');

const list = document.querySelectorAll(`li`);

const listSort = () => {
  const array = [...list];

  item.innerHTML = ``;

  const toNumber = (element) => {
    const string = element.dataset.salary;

    return Number(string.slice(1).replaceAll(',', ''));
  };

  array
    .sort((a, b) => toNumber(b) - toNumber(a))
    .map(element => {
      item.appendChild(element);
    });
};

const getEmployees = () => {
  const array = [...list];

  return array.map((element) => (
    {
      name: element.innerHTML.trim(),
      ...element.dataset,
    }
  ));
};

listSort();
getEmployees();
