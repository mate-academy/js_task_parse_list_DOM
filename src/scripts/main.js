'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function getNumber(string) {
  let str = '';
  const comma = string.indexOf(',');

  str += string.slice(1, comma);
  str += string.slice(comma + 1);

  return +str;
}

function sortList(array) {
  const finalList = [...array].sort(function(a, b) {
    return getNumber(b.dataset.salary) - getNumber(a.dataset.salary);
  });

  ul.append(...finalList);

  return finalList;
}

function getObject(array) {
  return [...array].map(x => {
    return {
      name: x.innerText,
      ...x.dataset,
    };
  });
}

getObject(sortList(li));
