'use strict';

const ul = document.getElementsByTagName('ul')[0];

const newUl = ul.cloneNode(false);
const lis = getEmployees(ul);

sortList(lis);

for (let i = 0; i < lis.length; i++) {
  newUl.appendChild(lis[i]);
}
ul.parentNode.replaceChild(newUl, ul);

function sortList(list) {
  list.sort(function (a, b) {
    return (
      parseInt(b.getAttribute('data-salary').replaceAll(/\D/g, ''), 10) -
      parseInt(a.getAttribute('data-salary').replaceAll(/\D/g, ''), 10)
    );
  });
}

function getEmployees(parentUl) {
  const res = [];

  for (let i = 0; i < parentUl.childNodes.length; i++) {
    if (parentUl.childNodes[i].nodeName === 'LI') {
      res.push(parentUl.childNodes[i]);
    }
  }

  return res;
}
