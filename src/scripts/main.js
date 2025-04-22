'use strict';

function convertStrToNum(text) {
  return +String(text).replaceAll(/[^0-9]*/gm, '');
}

function sortList(list) {
  list.sort(
    (li1, li2) =>
      convertStrToNum(li2.dataset.salary) - convertStrToNum(li1.dataset.salary),
  );
  ulList.forEach((li) => ul.append(li));
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => {
    const names = item.textContent.trim();
    const salary = item.getAttribute('data-salary');
    const position = item.getAttribute('data-position');
    const age = item.getAttribute('data-age');

    employees.push({
      name: names,
      salary: salary,
      position: position,
      age: age,
    });
  });

  return employees;
}

const ul = document.querySelector('ul');
const ulList = [...ul.children];

sortList(ulList);
getEmployees(ulList);
