'use strict';

// write code here
const list = document.querySelector('ul');
const employees = [...list.children];
const result = employees.sort((a, b) => {
  const salary1 = a.dataset.salary.replace('$', '');
  const salary2 = b.dataset.salary.replace('$', '');

  return +salary2.replace(',', '') - +salary1.replace(',', '');
});

result.forEach((el) => {
  list.append(el);
});
