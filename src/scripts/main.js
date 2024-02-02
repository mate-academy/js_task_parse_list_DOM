'use strict';

function convertToNumber(string) {
  return parseFloat(string.replace(/[^0-9]/g, ''));
}

const list = document.querySelector('ul');
const listItems = Array.from(document.querySelectorAll('ul li'));

function sortList() {
  listItems.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  listItems.forEach(item => list.appendChild(item));
}

sortList();
