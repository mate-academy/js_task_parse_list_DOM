'use strict';

const list = Array.from(document.getElementsByTagName('li'));

function sortList(x) {
  for (const n of x) {
    n.dataset.salary = +n.dataset.salary
      .split('')
      .filter((elem) => !isNaN(elem))
      .join('');
  }

  return x.sort((z, y) => y.dataset.salary - z.dataset.salary);
}

function getEmployees(x) {
  const parentElement = x[0].parentElement;

  for (const li of x) {
    parentElement.append(li);
  }
}

const sorted = sortList(list);

getEmployees(sorted);
