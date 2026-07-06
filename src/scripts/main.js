'use strict';

const res = [...document.querySelectorAll('li')].map((item) => item.textContent.trim());
const salaries = [];

for (const item of document.querySelectorAll('li')) {
  salaries.push(+item.dataset.salary.slice(1).replaceAll(',', ''));
}
console.log(salaries);
