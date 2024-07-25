'use strict';

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort(
    (a, b) =>
      b.dataset.salary.slice(1).split(',').join('') -
      a.dataset.salary.slice(1).split(',').join(''),
  );

  itemsArray.forEach((item) => list.appendChild(item));
}

const employeeList = document.getElementById('employee-list');

sortList(employeeList);
