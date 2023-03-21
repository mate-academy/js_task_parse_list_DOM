'use strict';

const items = document.querySelectorAll('li');

const sortedList = [...items].sort(
  (a, b) =>
    +b.dataset.salary.replace(/[^+\d]/g, '')
    - +a.dataset.salary.replace(/[^+\d]/g, '')
);

document.querySelector('ul').remove();

const list = document.createElement('ul');

for (const item of sortedList) {
  list.append(item);
}

document.querySelector('body').append(list);
