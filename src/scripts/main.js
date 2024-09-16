'use strict';

const listElements = document.querySelectorAll('li');
const list = document.querySelector('ul');

function sortList(data) {
  const dataArr = [...data];

  const convertToNumber = (string) => {
    return +string.dataset.salary.slice(1).split(',').join('');
  }

  dataArr.sort((a, b) => {
    const prev = convertToNumber(a);
    const next = convertToNumber(b);
  
    return next - prev;
  });
  console.log(...dataArr)

  list.append(...dataArr);
}
console.log(list)

function getEmployees(data) {
  const res = [...data].map(item => ({
    name: item.innerText.trim(),
    ...item.dataset,
  }));
  
  return res;
}

sortList(listElements)
getEmployees(listElements)


