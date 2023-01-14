'use strict';

const employeesList = document.querySelector('ul');

const sortListItems = (list) => {
  const listChildren = [...list.children];

  return listChildren.sort((a, b) => getSalaryValue(b) - getSalaryValue(a));
};

const sortList = (list) => {
  const listItems = sortListItems(list);

  for (const item of listItems) {
    list.append(item);
  }
};

const getSalaryValue = (item) => {
  return +item.attributes.getNamedItem('data-salary')
    .value.slice(1).split(',').join('');
};

sortList(employeesList);
