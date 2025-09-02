'use strict';

// write code here

function parseSalary(str) {
  const regEx = /[$,]/g;

  return Number(str.replace(regEx, ''));
}

function sortList(ul) {
  const items = ul.querySelectorAll(':scope > li');
  const parsedEmployeeList = Array.from(items);

  const sortedEmployeeList = parsedEmployeeList.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  ul.innerHTML = '';
  sortedEmployeeList.forEach((li) => ul.appendChild(li));
}

function getEmployees(ul) {
  const items = ul.querySelectorAll(':scope > li');
  const parsedEmployeeList = Array.from(items);
  const dataList = [];

  parsedEmployeeList.forEach(
    (li) =>
      dataList.push({
        name: li.textContent.trim(),
        position: li.dataset.position,
        salary: parseSalary(li.dataset.salary),
        age: Number(li.dataset.age),
      }),
    // eslint-disable-next-line function-paren-newline
  );

  return dataList;
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
