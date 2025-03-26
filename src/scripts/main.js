'use strict';

function convertSalaryToNumber(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((elem1, elem2) => {
    const salary1 = convertSalaryToNumber(elem1.getAttribute('data-salary'));
    const salary2 = convertSalaryToNumber(elem2.getAttribute('data-salary'));

    return salary2 - salary1;
  });

  for (const item of itemsArray) {
    list.append(item);
  }
}

function getEmployees(list) {
  const itemsArray = Array.from(list.children);

  return itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: convertSalaryToNumber(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age'), 10),
    };
  });
}

const result = document.querySelector('ul');

sortList(result);
getEmployees(result);
