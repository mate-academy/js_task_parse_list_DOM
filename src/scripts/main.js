'use strict';

const list = document.querySelector('ul');
const listChildren = document.querySelectorAll('li');
const ArrayListChildren = [...listChildren];

ArrayListChildren.sort((a, b) => {
  const cleanA = a.dataset.salary.replace(/[$,]/g, '');
  const cleanB = b.dataset.salary.replace(/[$,]/g, '');

  const salaryA = Number(cleanA);
  const salaryB = Number(cleanB);

  return salaryB - salaryA;
});

list.innerHTML = '';
ArrayListChildren.forEach((li) => list.appendChild(li));
