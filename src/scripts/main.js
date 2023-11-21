'use strict';

// write code here
const list = Array.from(document.querySelectorAll('ul > li'));

list.sort((a, b) => {
  const salaryA = parseInt(a.getAttribute('data-salary').replace('$', '')
    .replace(',', ''), 10);

  const salaryB = parseInt(b.getAttribute('data-salary').replace('$', '')
    .replace(',', ''), 10);

  return salaryB - salaryA;
});

document.querySelector('ul').innerHTML = '';

list.forEach(slave => {
  document.querySelector('ul').appendChild(slave);
});
// I'd do it by class, but we were insctucted not to use that
