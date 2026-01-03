'use strict';

// write code here
const list = document.querySelector('ul');

function parseSalary(el) {
  const sal = el.dataset.salary.slice(1).split(',').join('');

  if (!isNaN(sal)) {
    return Number(sal);
  } else {
    return 0;
  }
}

function sortList(liEl) {
  const salarys = liEl.querySelectorAll('li[data-salary]');

  const array = [...salarys];

  array.sort((a, b) => parseSalary(b) - parseSalary(a));
  liEl.append(...array);
}

function getEmployees(liEl) {
  const salarys = liEl.querySelectorAll('li[data-salary]');

  const array = [...salarys];

  return array.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: parseSalary(el),
      age: Number(el.dataset.age),
    };
  });
}

sortList(list);

getEmployees(list);
