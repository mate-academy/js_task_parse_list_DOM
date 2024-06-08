'use strict';

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);
  getEmployees(employeeList);
}

function sortList(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const itemA = helper(a.getAttribute('data-salary'));
    const itemB = helper(b.getAttribute('data-salary'));

    return itemB - itemA;
  });

  const sortedHTML = listItems.map((item) => item.outerHTML).join('');

  list.innerHTML = sortedHTML;
}

function helper(string) {
  return Number(string.replace(/[^0-9.-]+/g, ''));
}

function getEmployees(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: helper(item.getAttribute('data-salary')),
      age: helper(item.getAttribute('data-age')),
    };
  });
}
