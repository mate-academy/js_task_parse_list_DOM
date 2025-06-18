'use strict';

const lists = document.body.querySelector('ul');

function sortList() {
  const li = lists.querySelectorAll('li');
  const arr = [...li];

  arr.sort((a, b) => +b.dataset.salary - +a.dataset.salary);
  arr.forEach((element) => lists.appendChild(element));
}
