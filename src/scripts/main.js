'use strict';

const listItems = document.querySelectorAll('li');
const listBox = document.querySelector('ul');

const getEmployess = (list) => {
  const listOfEmployess = [];

  for (let i = 0; i < list.length; i++) {
    const emloyess = {
      name: list[i].innerText,
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    };

    listOfEmployess.push(emloyess);
  }

  return listOfEmployess;
};

const converSalary = (salary) => {
  return salary.replace(/\D/g, '');
};

const sortList = (list, convert) => {
  const sortedList = [...list]
    .sort((a, b) =>
      convert(b.dataset.salary) - convert(a.dataset.salary));

  return listBox.append(...sortedList);
};

sortList(listItems, converSalary);
getEmployess(listItems);
