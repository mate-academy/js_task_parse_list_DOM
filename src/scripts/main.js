'use strict';

const ul = document.querySelector('ul');

function converNumber(li) {
  if (li.dataset.salary) {
    const moneyStr = li.dataset.salary;
    const money = Number(moneyStr.replace(/[$,]/g, ''));

    return isNaN(money) ? 0 : money;
  }
}

function sortList(list) {
  if (list) {
    const children = [...list.children];

    if (children) {
      return children
        .sort((l1, l2) => converNumber(l2) - converNumber(l1))
        .forEach((item) => list.appendChild(item));
    }
  }
}

sortList(ul);
