'use strict';

function convertSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

const list = document.querySelector('ul');
const items = Array.from(list.children);

items.sort((a, b) => {
  const salaryA = convertSalaryToNumber(a.dataset.salary);
  const salaryB = convertSalaryToNumber(b.dataset.salary);

  return salaryB - salaryA;
});
