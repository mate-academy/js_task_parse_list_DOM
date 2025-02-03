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
  ul.innerHTML = '';
  employeeList.forEach((item) => ul.appendChild(item));
}

function getEmployees() {
  const employees = list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });

  return employees;
}

sortList(list);
getEmployees();
