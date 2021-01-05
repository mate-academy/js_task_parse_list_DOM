'use strict';

const itemList = document.querySelector('ul');

function sortList(list) {
  const items = [...list.children];
  const salary = (elem) => elem.dataset.salary.replace(/[^0-9]/g, '');

  items.sort((prevItem, nextItem) => salary(nextItem) - salary(prevItem));

  itemList.append(...items);
}

sortList(itemList);

function getEmployees(list) {
  return [...list.children].map(elem => (
    {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    }
  ));
}

getEmployees(itemList);
