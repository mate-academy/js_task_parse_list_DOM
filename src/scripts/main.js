'use strict';

// write code here
function sortList(list) {
  const children = Array.from(list.children);

  children.sort(sortFunc);

  for (const obj of children) {
    list.appendChild(obj);
  }
}

function sortFunc(a, b) {
  const aSal = formatSalary(a.dataset.salary);
  const bSal = formatSalary(b.dataset.salary);

  return bSal - aSal;
}

function formatSalary(salary) {
  const copy = salary.slice(1);

  return +copy.split(',').join('');
}

function getEmployees(list) {
  const children = list.children;
  const res = [...children].map((elem) => {
    return {
      salary: elem.dataset.salary,
      age: elem.dataset.age,
      position: elem.dataset.position,
      name: elem.innerText,
    };
  });

  return res;
}

const doc = document.documentElement;
const uList = doc.querySelector('ul');

sortList(uList);
getEmployees(uList);
