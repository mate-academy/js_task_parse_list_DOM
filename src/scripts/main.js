'use strict';
function sortList() {
const list = document.querySelector('ul');
const workers = [...document.querySelectorAll('li[data-salary]')];

workers.sort((a, b) => {
  const salaryA = Number(a.dataset.salary.slice(1).split(',').join(''));
  const salaryB = Number(b.dataset.salary.slice(1).split(',').join(''));

  return salaryB - salaryA;
});

workers.forEach((worker) => {
  list.append(worker);
});
}

// write code here
