'use strict';

const arrLi = [...document.querySelectorAll('li')];

sortList(arrLi);
getEmployees(arrLi);

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((li1, li2) => {
    const salary1 = parsNumber(li1.dataset.salary);
    const salary2 = parsNumber(li2.dataset.salary);

    return salary2 - salary1;
  });

  delateLi(list, ul);
  addLi(list, ul);
}

function parsNumber(str) {
  const strNum = str.slice(1);

  return parseFloat(strNum);
}

function delateLi(list, where) {
  list.forEach((li) => {
    where.removeChild(li);
  });
}

function addLi(list, where) {
  list.forEach((li) => {
    where.append(li);
  });
}

function getEmployees(list) {
  const arrEmployees = list.map((li) => {
    const { age, salary, position } = li.dataset;

    const employee = {
      name: li.textContent.trim(),
      position,
      salary,
      age,
    };

    return employee;
  });

  return arrEmployees;
}
