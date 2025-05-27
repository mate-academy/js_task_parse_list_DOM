'use strict';

const list = document.querySelector('ul');
const item = Array.from(list.querySelectorAll('li'));

function sortList(data) {
  const sortedItems = data.sort((a, b) => {
    const salaryA = getNumberOfString(a.getAttribute('data-salary'));
    const salaryB = getNumberOfString(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortedItems.forEach((element) => list.appendChild(element));

  return sortedItems;
}

sortList(item);

function getNumberOfString(string) {
  const number = Array.from(string);
  const index = number.indexOf(',');

  number.splice(index, 1, '.');
  number.splice(0, 1, '');

  const res = number.join('');

  return res;
}
