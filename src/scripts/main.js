'use strict';

const employeesList = document.querySelector('ul');

const sortListItems = (list) => {
  const listChildren = [...list.children];

  return listChildren.sort((a, b) => {
    const innerA = +a.attributes.getNamedItem('data-salary')
      .value.slice(1).split(',').join('');
    const innerB = +b.attributes.getNamedItem('data-salary')
      .value.slice(1).split(',').join('');

    if (innerA < innerB) {
      return 1;
    } else {
      return -1;
    }
  });
};

const sortList = (list) => {
  const listItems = sortListItems(list);

  for (const item of listItems) {
    list.append(item);
  }
};

sortList(employeesList);
