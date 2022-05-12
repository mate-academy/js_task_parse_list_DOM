'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

function sortList() {
  const salaryToNum = (salary) =>
    Number(salary.slice(1).split(',').join(''));

  const sorted = listItems.sort(
    (a, b) => salaryToNum(b.dataset.salary) - salaryToNum(a.dataset.salary));

  return list.append(...sorted);
}

function getEmployees() {
  const resultArr = [];

  for (const item of listItems) {
    const fullName = item.innerText;

    resultArr.push({
      fullName, ...item.dataset,
    });
  }

  return resultArr;
}

sortList();
getEmployees();
