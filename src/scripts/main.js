'use strict';

const list = document.querySelector('ul');
const listItems = [...document.querySelectorAll('[data-salary]')];

function sortList(sourceList) {
  return sourceList.sort(
    (a, b) =>
      convertSalaryToNumber(b.attributes['data-salary'].value) -
      convertSalaryToNumber(a.attributes['data-salary'].value),
  );
}

function convertSalaryToNumber(salaryValue) {
  return Number(salaryValue.replace(/[,$]/g, ''));
}

function getEmployees(sourceList) {
  return sourceList.map((item) => {
    const employeeName = item.innerText;
    const position = item.attributes['data-position'].value;
    const salary = item.attributes['data-salary'].value;
    const age = item.attributes['data-age'].value;

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
}

const sortedList = sortList(listItems);

sortedList.forEach((item) => {
  list.appendChild(item);
});

getEmployees(sortedList);
