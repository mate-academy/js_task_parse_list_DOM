'use strict';

const list = document.querySelector('ul');

const convertToNum = (string) => {
  return Number(string.replace(/[$,]/g, ''));
};

function sortList(nodeList) {
  const array = [...nodeList.children].sort(
    (a, b) => convertToNum(b.dataset.salary) - convertToNum(a.dataset.salary),
  );

  list.innerHTML = '';

  array.forEach((item) => list.appendChild(item));
}

function getEmployees(nodeList) {
  const result = [];

  [...nodeList.children].forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(employee);
  });

  return result;
}

sortList(list);
getEmployees(list);
