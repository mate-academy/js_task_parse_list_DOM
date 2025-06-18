'use strict';

const ul = document.querySelector('ul');
const listArr = [...ul.getElementsByTagName('li')];

sortList(listArr);
getEmployees(listArr);

function sortList(listParam) {
  const res = listParam.sort((a, b) => {
    const el1 = parseInt(a.dataset.salary.replace(/[$,]/g, ''), 10);
    const el2 = parseInt(b.dataset.salary.replace(/[$,]/g, ''), 10);

    return el2 - el1;
  });

  res.forEach((element) => {
    ul.appendChild(element);
  });
}

function getEmployees(listParam) {
  const res = [];

  for (const el of listParam) {
    res.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  }

  return res;
}
