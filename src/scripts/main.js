'use strict';

// write code here

const ul = document.querySelector('ul');
const list = [...ul.children];

function sortList(employeeList) {
  employeeList.forEach((item) => {
    item.dataset.salary = parseInt(
      item.dataset.salary.replace('$', '').replace(',', ''),
      10,
    );
  });

  employeeList.sort((a, b) => b.dataset.salary - a.dataset.salary);
}

function getEmployees(employeeList) {
  ul.innerHTML = '';
  employeeList.forEach((item) => ul.appendChild(item));
}

sortList(list);
getEmployees(list);
