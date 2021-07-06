'use strict';

const employees = document.querySelector('ul');

const convertStringToNumber = string => (
  Number(string.slice(1).split(',').join(''))
);

const sortList = list => {
  const listItems = [...list.children];

  listItems.sort((current, next) => (
    convertStringToNumber(next.dataset.salary)
    - convertStringToNumber(current.dataset.salary)
  ));

  employees.append(...listItems);
};

const getEmployees = list => {
  return [...list.children].map(listChild => {
    return {
      name: listChild.innerText,
      ...listChild.dataset,
    };
  });
};

sortList(employees);
getEmployees(employees);
