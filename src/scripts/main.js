'use strict';

const list = document.querySelector('ul');

const listItems = Array.from(list.getElementsByTagName('li'));

const sortedList = listItems.sort((a, b) => {
  const valueA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const valueB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return valueA - valueB;
});

list.innerHTML = '';

sortedList.forEach((element) => {
  list.appendChild(element);
});
