'use strict';

const listOfEmployee = document.querySelector('ul');

function sortList(list) {
  const sortedItems = [...list.children].sort((a, b) => {
    return (
      convertToNumber(b.getAttribute('data-salary')) -
      convertToNumber(a.getAttribute('data-salary'))
    );
  });

  sortedItems.forEach((node) => listOfEmployee.appendChild(node));
}

function getEmployees(list) {
  return [...list.children].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.getAttribute('data-position'),
      salary: convertToNumber(employee.getAttribute('data-salary')),
      age: convertToNumber(employee.getAttribute('data-age')),
    };
  });
}

function convertToNumber(data) {
  if (!data) {
    return 0;
  }

  const cleanData = data.replace(/[^0-9.]/g, '');

  return Number(cleanData);
}

sortList(listOfEmployee);
getEmployees(listOfEmployee);
