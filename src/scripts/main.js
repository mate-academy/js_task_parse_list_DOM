'use strict';

const list = document.querySelector('ul');

const salaryToNumber = (salary) => +salary.replace(/[$,]/g, '');

function sortList(ul) {
  const items = [...ul.children].sort(
    (item1, item2) =>
      salaryToNumber(item2.dataset.salary) -
      salaryToNumber(item1.dataset.salary),
  );

  items.forEach((el) => list.append(el));
}

function getEmployees(ul) {
  return [...ul.children].map((el) => ({
    name: el.textComtent.trim(),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
