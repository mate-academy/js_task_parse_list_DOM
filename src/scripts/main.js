'use strict';

const listArray = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const helper = (value) => {
  const changeValue = value.getAttribute('data-salary');

  if (typeof changeValue === 'string') {
    return +changeValue.replaceAll('$', '').split(',').join('');
  }
};

const sortList = (list) => {
  const ulWrap = document.createElement('ul');
  const sortedList = [...list].sort((a, b) => helper(b) - helper(a));

  sortedList.forEach((item) => ulWrap.appendChild(item));
  ul.replaceWith(ulWrap);
};

const getEployis = () => {
  const sortedArray = [...document.querySelectorAll('li')];

  return sortedArray;
};

sortList(listArray);
getEployis();
