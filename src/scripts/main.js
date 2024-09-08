'use strict';

// write code here

const listOfNames = document.querySelector('ul');

function formatSalary(input) {
  return input.replace(/[^0-9.]/g, '');
}

function sortList(list) {
  const listItemsArray = [...list.querySelectorAll('li')];
  const listItemsArraySorted = listItemsArray.sort((a, b) => {
    return (
      Number(formatSalary(b.dataset.salary)) -
      Number(formatSalary(a.dataset.salary))
    );
  });

  listItemsArraySorted.forEach((item) => {
    list.appendChild(item);
  });
}

sortList(listOfNames);

function getEmployeeList(list) {
  const employeeList = [];

  list.querySelectorAll('li').forEach((item) => {
    employeeList.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: formatSalary(item.dataset.salary),
      age: item.dataset.age,
    });
  });

  return employeeList;
}

getEmployeeList(listOfNames);
