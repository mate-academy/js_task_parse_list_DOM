'use strict';

const list = document.querySelectorAll('li');
const sortedList = [...list].sort((a, b) =>
  +b.attributes[1].value.replace(/[^\d]/g, '')
  - +a.attributes[1].value.replace(/[^\d]/g, ''));

const ul = document.querySelector('ul');

ul.innerHTML = sortedList.map(li => `
  <li>
    ${li.innerText}
  </li>
`).join('');
