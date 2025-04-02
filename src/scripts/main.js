/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
'use strict';

const list = [];

for (const li of document.querySelectorAll('[data-position]')) {
  list.push([
    li.textContent.toString().trim(),
    li.getAttribute('data-position'),
    li.getAttribute('data-salary'),
    li.getAttribute('data-age'),
  ]);
}

list.sort((a, b) => Number(b[2].replace(/[^\d.]/g, '')) - Number(a[2].replace(/[^\d.]/g, '')));

document.querySelectorAll('[data-position]').forEach((li, i) => {
  li.setAttribute('data-position', list[i][1]);
  li.setAttribute('data-salary', list[i][2]);
  li.setAttribute('data-age', list[i][3]);
  li.innerText = list[i][0];
});
