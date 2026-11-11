'use strict';

const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

const changeToNum = (str) => {
  return Number(str.split('$')[1].replaceAll(',', ''));
};

const sortList = (list) => {
  ul.append(
    ...list.sort(
      (el1, el2) =>
        changeToNum(el2.dataset.salary) - changeToNum(el1.dataset.salary),
    ),
  );
};

sortList(li);
