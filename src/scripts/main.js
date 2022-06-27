'use strict';

// write code here
const unorderedList = document.querySelector(`ul`);
const list = document.querySelectorAll(`li`);

const sortList = () => {
  const array = [...list];

  unorderedList.innerHTML = ``;

  const toNumber = (element) => {
    const string = element.dataset.salary;

    return Number(string.slice(1).replaceAll(',', ''));
  };

  array
    .sort((a, b) => toNumber(b) - toNumber(a))
    .map(element => {
      unorderedList.appendChild(element);
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

sortList();
getEmployees();
