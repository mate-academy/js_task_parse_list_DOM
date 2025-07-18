'use strict';

const nodes = document.querySelectorAll('[data-position]');
const list = [...nodes];

function sortList(employeeList) {
  const container = document.getElementsByTagName('ul');

  employeeList.sort((a, b) => {
    const bEl = formatData(a.dataset.salary);
    const aEl = formatData(b.dataset.salary);

    return aEl - bEl;
  });

  container[0].innerHtml = '';
  list.forEach((el) => container[0].appendChild(el));
}

function formatData(data) {
  return Number(data.replace(/\$|,/g, ''));
}

function getEmployees(employeeList) {
  const employeesArr = [];

  list.forEach((el) => {
    employeesArr.push({
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: formatData(el.dataset.salary),
      age: el.dataset.age,
    });
  });
}
sortList(list);
getEmployees(list);
