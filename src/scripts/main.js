'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const copyOfList = [...list.children];

  const sorted = copyOfList.sort((a, b) => {
    const preparedA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const preparedB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return preparedB - preparedA;
  });

  list.append(...sorted);
}

const getEmployees = (list) => {
  const copyOfList = [...list.children];
  return copyOfList.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    };
  });
};

sortList(employeeList);
getEmployees(employeeList);
