'use strict';

const list = document.querySelector('ul');

const sortList = () => {
  const newItems = [...list.children].sort((prev, next) =>
    +next.dataset.salary.match(/[0-9]/g).join('')
      - (+prev.dataset.salary.match(/[0-9]/g).join(''))
  );

  for (const item of newItems) {
    list.append(item);
  }
};

const getEmployees = () => {
  const listOfEmployees = [...list.children].map(item => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return listOfEmployees;
};

sortList();
getEmployees();
