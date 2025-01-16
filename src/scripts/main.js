'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.children);

getEmployees(list, sortList(items));

function sortList(someList) {
  return someList.sort((a, b) => {
    return (
      stringToNumber(b.getAttribute('data-salary')) -
      stringToNumber(a.getAttribute('data-salary'))
    );
  });
}

function stringToNumber(string) {
  return Number(string.replace('$', '').replaceAll(',', ''));
}

function getEmployees(node, itemsOfNode) {
  node.innerHTML = '';

  itemsOfNode.forEach((item) => {
    list.appendChild(item);
  });
}
