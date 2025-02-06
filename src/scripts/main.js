'use strict';

function getSalaryValue(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function sortList(lists) {
  if (!lists) {
    return;
  }

  const items = Array.from(lists.children);

  items.sort((a, b) => {
    const salaryA = getSalaryValue(a.getAttribute('data-salary'));
    const salaryB = getSalaryValue(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

// function getEmployees(lists) {
// if (!list) return [];
//   return Array.from(lists.children).map((item) => ({
//     name: item.getAttribute('data-name'),
//     position: item.getAttribute('data-position'),
//     salary: getSalaryValue(item.getAttribute('data-salary')),
//     age: item.getAttribute('data-age'),
//   }));
// }
//   if (list) {
//   sortList(list);
//   console.log(getEmployees(list));
// }

const list = document.querySelector('ul');

sortList(list);
