'use strict';

const parseSalary = (salaryStr) => {
  return parseInt(salaryStr.replace(/[$,]/g, ''), 10);
};

const sortList = (list) => {
  const items = Array.from(list.children);

  items.sort((el1, el2) => {
    const salary1 = parseSalary(el1.getAttribute('data-salary'));
    const salary2 = parseSalary(el2.getAttribute('data-salary'));

    return salary2 - salary1;
  });

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
};

const ul = document.querySelector('ul');

sortList(ul);
