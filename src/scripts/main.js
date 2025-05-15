'use strict';

function sortList(param) {
  const list = param;
  const item = Array.from(list.querySelectorAll('li'));

  const sorted = item.sort((a, b) => {
    const salaryA = a.dataset.salary.replace(/[^0-9]/g, '');
    const salaryB = b.dataset.salary.replace(/[^0-9]/g, '');

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sorted.forEach((a) => list.append(a));
}
sortList(document.querySelector('ul'));

function getEmployees(param) {
  const result = [];
  const list = param;
  const item = Array.from(list.querySelectorAll('li'));

  item.map((x) =>
    result.push({
      name: x.textContent.trim(),
      position: x.dataset.position,
      salary: x.dataset.salary,
      age: x.dataset.age,
    }),
  );

  return result;
}

getEmployees(document.querySelector('ul'));
