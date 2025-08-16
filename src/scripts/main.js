'use strict';

const list = document.querySelector('ul');

// helper convertion function
function convertor(listItem) {
  const workers = Array.from(listItem.querySelectorAll('li'));

  return workers.map((value) => {
    const numericSalary = parseInt(value.dataset.salary.replace(/[^0-9]/g, ''));

    value.dataset.salary = numericSalary;

    return value;
  });
}

// helper sorter function
function sorter(listItem) {
  const convertedArr = convertor(listItem);

  return convertedArr.sort((a, b) => b.dataset.salary - a.dataset.salary);
}

// first function
function sortList(listItem) {
  const sortedArr = sorter(listItem);

  sortedArr.forEach((worker) => listItem.appendChild(worker));

  return sortedArr;
}

// second function
function getEmployees(listItem) {
  const employs = Array.from(listItem.querySelectorAll('li'));

  return employs.map((employee) => ({
    name: Array.from(employee.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .filter(Boolean)
      .join(' '),
    position: employee.dataset.position,
    salary: +employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

convertor(list);
sortList(list);
getEmployees(list);
