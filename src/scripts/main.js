'use strict';

function sortList(elementList) {
  return elementList.sort((a, b) => {
    function getNum(listItem) {
      return +listItem.dataset['salary'].replace('$', '').replace(',', '');
    }

    return getNum(b) - getNum(a);
  });
}

function setNewList(elementList) {
  const list = document.querySelector('ul');

  elementList.forEach((element) => {
    list.appendChild(element);
  });
}

setNewList(sortList([...document.querySelectorAll('li')]));
