'use strict';

const elements = document.querySelectorAll('li[data-salary]');

const elementsArray = [...elements];

const sorted = elementsArray.sort((a, b) => {
  const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
  const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

const ul = document.querySelector('ul');

ul.innerHTML = '';

for (const el of sorted) {
  ul.append(el);
}
