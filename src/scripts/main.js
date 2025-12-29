'use strict';

const employeList = document.querySelector('ul');
const parseSalary = (s) =>
  Number(String(s).replaceAll(',', '').replaceAll('$', ''));

function sortList(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  const sortedItems = listItems.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.append(...sortedItems);
}

function getEmployees(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  return listItems.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(employeList);
getEmployees(employeList);
