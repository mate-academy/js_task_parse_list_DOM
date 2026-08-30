'use strict';

const List = document.querySelector('ul');
const list = document.querySelectorAll('li');
const salariesMap = new Map();

function sortingList(nodelist) {
  nodelist.forEach((item) => {
    function converter(val) {
      const value = +val.dataset.salary.replace(/[$,]/g, '');

      return value;
    }
    salariesMap.set(item, converter(item));
  });

  const sortedList = Array.from(salariesMap.entries());

  sortedList.sort((a, b) => b[1] - a[1]);

  return sortedList;
}

for (let i = 0; i < sortingList(list).length; i++) {
  List.appendChild(sortingList(list)[i][0]);
}
