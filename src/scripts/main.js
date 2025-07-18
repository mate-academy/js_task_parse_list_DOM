'use strict';

const nodes = document.querySelectorAll('[data-position]');
const list = [...nodes];

function sortList(employeeList) {
  const container = document.getElementsByTagName('ul');

  employeeList.sort((a, b) => {
    const aEl = formatData(a.dataset.salary);
    const bEl = formatData(b.dataset.salary);

    return bEl - aEl;
  });

  container[0].innerHTML = '';
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

  return employeesArr;
}
sortList(list);
getEmployees(list);
