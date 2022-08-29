'use strict';

// write code here
const item = document.querySelector('ul');

const list = document.querySelectorAll(`li`);

const listSort = () => {
  const currentList = [...list];

  item.innerHTML = ``;

  const toNumber = (element) => {
    const string = element.dataset.salary;

    return Number(string.slice(1).replaceAll(',', ''));
  };

  currentList
    .sort((a, b) => toNumber(b) - toNumber(a))
    .forEach(element => {
      item.appendChild(element);
    });
};

const getEmployees = () => {
  const currentList = [...list];

  return currentList.map((element) => (
    {
      name: element.innerHTML.trim(),
      ...element.dataset,
    }
  ));
};

listSort();
getEmployees();
